import { Route, Routes, BrowserRouter } from "react-router-dom";

/* PUBLIC LAYOUTS */
import { AuthLayout } from "@views/layouts/public/authLayout";

/* PUBLIC VIEWS */
import { SignIn } from "@views/pages/public/signIn";
import { SignUp } from "@views/pages/public/signUp";
import { ForgotPassword } from "@views/pages/public/forgotPassword";
import { VerifyCode } from "@views/pages/public/verifyCode";
import { ResetPassword } from "@views/pages/public/resetPassword";
import { AuthGuard } from "./authGuard";

/* PRIVATE VIEWS */


export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				{/* PUBLIC ROUTES */}
				<Route element={<AuthGuard isPrivate={false} />}>
					{/*<Route index path="/home" element={<Home />} />*/}

					<Route element={<AuthLayout/>}>
						<Route path="/sign-in" element={<SignIn />}/>
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
						<Route path="/verify-code" element={<VerifyCode />} />
						<Route path="/reset-password" element={<ResetPassword />} />
					</Route>
				</Route>

				{/* PRIVATE ROUTES */}
				<Route element={<AuthGuard isPrivate />}>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}
