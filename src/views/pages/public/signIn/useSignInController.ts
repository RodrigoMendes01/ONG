import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { useAuth } from "@app/hooks/useAuth";
import { authService } from "@app/services/authService";
import { SigninParams } from "@app/services/authService/signin";

const schema = z.object({
	email: z.string()
		.min(1, "E-mail é obrigatório")
		.email("Informe um e-mail válido"),
	password: z
		.string()
		.min(1, "Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function useSignInController() {
	const {
		register,
		handleSubmit: hookFormSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async (data: SigninParams) => {
			return authService.signin(data);
		},
	});

	const { signin } = useAuth();

	const handleSubmit = hookFormSubmit(async (data) => {
		try {
			const { accessToken } = await mutateAsync(data);

			signin(accessToken);
		} catch {
			toast.error("Credenciais inválidas!");
		}
	});

	return { handleSubmit, register, errors, isPending };
}
