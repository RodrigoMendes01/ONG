import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

import toast from "react-hot-toast";
import { useState } from "react";

export function useVerifyCodeController() {
	const navigate = useNavigate();
	const location = useLocation();

	const [isLoading, setIsLoading] = useState(false);

	const schema = z.object({
		digitOne: z.string().min(1, "O código é obrigatório."),
		digitTwo: z.string().min(1, "O código é obrigatório."),
		digitThree: z.string().min(1, "O código é obrigatório."),
		digitFour: z.string().min(1, "O código é obrigatório."),
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
  		navigate("/reset-password", {
  			state: {
  				token: location.state.token,
  				code: data.digitOne + data.digitTwo + data.digitThree + data.digitFour,
  			},
  		});

  		toast.success("Código verificado com sucesso!");
  	} catch (error) {
  		toast.error("Erro ao enviar verificar o código!");
  	} finally {
  		setIsLoading(false);
  	}
  });

  return {
  	errors,
  	isLoading,
  	register,
  	handleSubmit,
  };
}
