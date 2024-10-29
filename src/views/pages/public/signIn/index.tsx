import { useState } from "react";
import { Link } from "react-router-dom";

/* CONTROLLER */
import { useSignInController } from "./useSignInController";

/* COMPONENTS */
import { Input } from "@views/components/input";
import { Button } from "@views/components/button";

/* ICONS */
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export function SignIn () {
	const { handleSubmit, register, errors, isPending } = useSignInController();

	const [isPasswordVisible, setIsPasswordVisible] = useState<"password" | "text">("password");

	return (
		<div className="mt-6 w-2/3 max-md:w-3/4">
			<div className="flex flex-col items-center">
				<h1 className="mb-4 text-3xl font-bold max-lg:text-center max-lg:text-3xl">
        Te damos as boas vindas.
				</h1>
				<p>Acesse sua conta. <span>Novo por aqui? <Link className='text-green-700 font-semibold text hover:underline bg-transparent border-none cursor-pointer hover:text-green-800 hover:ease-in-out' to="/sign-up">Registre-se</Link></span></p>
			</div>

			<div>
				<form
					onSubmit={handleSubmit}
					className="mt-[35px] flex flex-col gap-4"
				>
					<Input
						type="email"
						placeholder="E-mail"
						error={errors.email?.message}
						{...register("email")}
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
					</div>
					<span className="text-sm">Esqueceu sua senha? <Link className='font-semibold text-green-700 hover:underline bg-transparent border-none cursor-pointer hover:text-green-800' to="/forgot-password">Recupere-a</Link></span>

					<Button type="submit" className="mt-2" isLoading={isPending}>
            Acessar
					</Button>
				</form>
			</div>
		</div>
	);
};
