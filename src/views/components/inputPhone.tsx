import { ComponentProps, forwardRef } from "react";
import ReactInputMask from "react-input-mask";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@app/utils/cn";

interface Props extends ComponentProps<"input"> {
  name: string
  label?: string
  error?: string
}

export const InputPhone = forwardRef<HTMLInputElement, Props>(
	({ placeholder, label, name, id, error, className, ...props }, ref) => {
		const inputId = id ?? name;

		return (
			<div className={cn("relative w-full", className)}>
				<ReactInputMask
					mask={"+55 (11) 99999-9999"}
					{...props}
					ref={ref}
					name={name}
					id={inputId}
					placeholder=" "
					className={cn(
						"bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none",
						error && "!border-red-600",
					)}
				/>

				<label
					htmlFor={inputId}
					className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
				>
					{placeholder}
				</label>

				{error && (
					<div className="flex gap-2 items-center mt-2 text-red-600">
						<CrossCircledIcon />
						<span className="text-xs">{error}</span>
					</div>
				)}
			</div>
		);
	},
);

InputPhone.displayName = "InputPhone";
