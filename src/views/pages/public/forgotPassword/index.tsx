import { Input } from "@views/components/input";
import { useForgotPasswordController } from "./useForgotPasswordController";
import { Button } from "@views/components/button";
import { Navigate } from "@views/components/navigate";

export function ForgotPassword() {
	const { register, errors, handleSubmit, isLoading } =
    useForgotPasswordController();

	return (
		<div className="mt-6 w-2/3 max-md:w-3/4">
			<div className="absolute top-16 left-8">
				<Navigate title="login"/>
			</div>

			<form
				id="forgot-password-form"
				onSubmit={handleSubmit}
				className="mt-4 space-y-3 px-3"
			>
				<p className="text-lg font-medium w-[80%]">
          Insira seu e-mail a seguir para redefinir sua senha.
				</p>
				<Input
					type="email"
					placeholder="E-mail"
					error={errors.email?.message}
					{...register("email")}
				/>

				<p className="my-3 text-sm font-normal text-gray-600">
          Enviaremos um e-mail com o código para redefinir sua senha!
				</p>

				<div>
					<Button type="submit" className="mt-2 w-full" isLoading={isLoading}>
          Enviar e-mail
					</Button>
				</div>
			</form>
		</div>
	);
}
