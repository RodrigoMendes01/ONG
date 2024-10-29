import { useState } from "react";
import { Input } from "@views/components/input";
import { useSignUpController } from "@views/pages/public/signUp/useSignUpController";
import { InputPhone } from "@views/components/inputPhone";
import { Button } from "@views/components/button";
import { Link } from "react-router-dom";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Navigate } from "@views/components/navigate";

export function SignUp() {
	const [isPasswordVisible, setIsPasswordVisible] = useState<
    "password" | "text"
  >("password");

	const { register, errors, handleSubmit, isLoading } =
    useSignUpController();

	return (
		<div className="mt-6 w-2/3 max-md:w-3/4">
			<div className="absolute top-16 left-8 max-md:top-14">
				<Navigate title="login"/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="mb-4 text-3xl font-bold max-lg:text-center max-lg:text-3xl">
        Crie sua conta conosco.
				</h1>
				<p>Informe os seus dados. <span>Já possui conta? <Link className='text-green-700 font-semibold text hover:underline bg-transparent border-none cursor-pointer hover:text-green-800 hover:ease-in-out' to="/sign-in">Acesse-a</Link></span></p>
			</div>

			<div>
				<form
					id="sign-up"
					onSubmit={handleSubmit}
					className="mt-4 space-y-3 px-3"
				>
					<Input
						type="name"
						placeholder="Nome completo"
						error={errors.name?.message}
						{...register("name")}
					/>

					<Input
						type="email"
						placeholder="E-mail"
						error={errors.email?.message}
						{...register("email")}
					/>

					<InputPhone
						id={"phone-id"}
						type="tel"
						placeholder="Telefone"
						error={errors.phone?.message}
						{...register("phone")}
					/>

					<div className='relative'>
						<Input
							type={isPasswordVisible}
							placeholder="Senha"
							error={errors.password?.message}
							{...register("password")}
						/>

						<span
							className="absolute right-0 top-1.5 cursor-pointer"
							onClick={() => {
								setIsPasswordVisible((prev) =>
									prev === "password" ? "text" : "password",
								);
							}}
						>
							{isPasswordVisible === "password" ? (
								<EyeOpenIcon className="mx-3 my-2.5 h-5 w-5 text-gray-800" />
							) : (
								<EyeClosedIcon className="mx-3 my-2.5 h-5 w-5 text-gray-800" />
							)}
						</span>

						<ul className="mt-2 mb-6 pl-8 list-disc">
							<li className="text-green-700">Deve ter, no mínimo, 6 caracteres</li>
							<li className="text-green-700">Deve incluir letras maiúsculas e minúsculas (a-z e A-Z)</li>
							<li className="text-green-700">Deve incluir um número (0-9)</li>
							<li className="text-green-700">Deve incluir um caractere especial (!, @, #, %, etc.)</li>
						</ul>
					</div>


					<Button type="submit" className="mt-8 w-full" isLoading={isLoading}>
            Criar conta
					</Button>
				</form>
			</div>
		</div>
	);
}
