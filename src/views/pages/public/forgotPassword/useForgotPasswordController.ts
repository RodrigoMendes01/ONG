import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "react-hot-toast";

import { httpClient } from "@app/services/httpClient";
import { useState } from "react";

export function useForgotPasswordController() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const schema = z.object({
		email: z.string()
			.min(1, "E-mail é obrigatório")
			.email("Informe um e-mail válido"),
	});

  type FormData = z.infer<typeof schema>

  const {
  	register,
  	formState: { errors },
  	handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>({
  	resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
  	setIsLoading(true);
  	try {
  		const { email } = data;

  		const response = await httpClient.post("/user/forgot-password-code", {
  			email,
  		});

  		toast.success("E-mail enviado com sucesso!");

  		navigate("/verify-code", {
  			state: {
  				token: response.data.token,
  			},
  		});
  	} catch (error) {
  		toast.error("Erro ao enviar e-mail!");
  	} finally {
  		setIsLoading(false);
  	}
  });

  return {
  	isLoading,
  	errors,
  	register,
  	handleSubmit,
  };
}
