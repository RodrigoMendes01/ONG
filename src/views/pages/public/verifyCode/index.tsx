import { Button } from "@views/components/button";
import { useVerifyCodeController } from "@views/pages/public/verifyCode/useVerifyCodeController";
import { InputDigit } from "@views/components/inputDigit";
import { moveFocus } from "@app/utils/moveInputFocus";

export function VerifyCode() {
	const { register, errors, handleSubmit, isLoading } = useVerifyCodeController();

	return (
		<div className="flex flex-col items-center">
			<h1 className="mb-6 mt-4 text-lg font-medium">
        Digite o código de confirmação enviado para o seu e-mail.
			</h1>
			<form
				onSubmit={handleSubmit}
				className="mt-4 flex flex-col w-full justify-center space-x-3"
			>
				<div className="flex items-center justify-center gap-8">
					<InputDigit
						id="box1"
						onKeyUp={(event) => moveFocus({ event, current: 1, next: 2 })}
						error={errors.digitOne?.message}
						{...register("digitOne")}
					/>
					<InputDigit
						id="box2"
						onKeyUp={(event) => moveFocus({ event, current: 2, next: 3 })}
						error={errors.digitTwo?.message}
						{...register("digitTwo")}
					/>
					<InputDigit
						id="box3"
						onKeyUp={(event) => moveFocus({ event, current: 3, next: 4 })}
						error={errors.digitThree?.message}
						{...register("digitThree")}
					/>
					<InputDigit
						id="box4"
						onKeyUp={(event) => moveFocus({ event, current: 4, next: 0 })}
						error={errors.digitFour?.message}
						{...register("digitFour")}
					/>
				</div>

				<p className="my-3 mt-6 text-sm font-normal text-gray-600">
        Quase lá! Só precisamos conferir seu código para cruzar a linha de
        chegada juntos 🚀
				</p>

				<Button type="submit" className="mt-2" isLoading={isLoading}>
          Verificar código
				</Button>
			</form>
		</div>
	);
}
