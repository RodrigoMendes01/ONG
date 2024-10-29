import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { useAuth } from "@app/hooks/useAuth";
import { httpClient } from "@app/services/httpClient";
import toast from "react-hot-toast";

export interface SignUpParams {
  name: string
  email: string
  phone: string
  password: string
}

interface SignUpResponse {
  access_token: string
}

export function useSignUpController() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const schema = z.object({
		name: z.string().min(1, "Nome é obrigatório"),
		email: z
			.string()
			.email("O e-mail informado é inválido")
			.min(1, "E-mail é obrigatório"),
		phone: z.string().min(1, "Número é obrigatório"),
		password: z.string().min(12, "Senha é obrigatória").max(12, "Deve conter no máximo 12 caracteres"),
	});

	const { signIn } = useAuth();

  type FormData = z.infer<typeof schema>

  const {
  	register,
  	formState: { errors },
  	control,
  	handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>({
  	resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
  	setIsLoading(true);
  	try {
  		toast.success("Usuário cadastrado com sucesso!");

  		const response = await httpClient.post<SignUpResponse>("/user", {
  			name: data.name,
  			email: data.email,
  			phone: data?.phone?.replace(/[^\d+]/g, ""),
  			password: data.password,
  		});

  		const accessToken = response.data.access_token;

  		signIn(accessToken);

  		navigate("/");
  	} catch (error) {
  		toast.error("Erro ao cadastrar usuário!");
  	} finally {
  		setIsLoading(false);
  	}
  });

  return {
  	errors,
  	control,
  	isLoading,
  	register,
  	handleSubmit,
  };
}
