import { Outlet } from "react-router-dom";

import authImage from "@/assets/images/authImage.png";
import { Logo } from "@/assets/svg/Logo";

export function AuthLayout() {
	return (
		<div className="flex h-full w-full">
			<div className="flex h-screen w-full flex-col items-center justify-center">
				<Logo/>
				<Outlet />
			</div>

			<div className="hidden max-h-screen w-[95%] md:block">
				<img
					src={authImage}
					alt="Mulher carregando uma caixa"
					className="h-[calc(100vh-0px)] max-h-[calc(100vh-px)] w-full select-none border object-cover shadow-lg"
				/>
			</div>
		</div>
	);
}
