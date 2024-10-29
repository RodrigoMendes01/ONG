import { ComponentProps, forwardRef } from "react";
import { cn } from "@app/utils/cn";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface Props extends ComponentProps<"input"> {
  name: string
  error?: string
}

export const InputDigit = forwardRef<HTMLInputElement, Props>(
	({ id, placeholder, name, error, className, ...props }, ref) => {
		return (
			<div className="flex flex-col items-center">
				<input
					{...props}
					ref={ref}
					name={name}
					maxLength={1}
					id={id}
					placeholder={placeholder}
					className={cn(
						"h-12 w-12 rounded border border-green-700 text-center text-xl font-medium shadow ring-0 focus:outline-gray-700",
						error && "!border-red-600",
						className,
					)}
				/>

				{error && (
					<div className="mt-2 flex flex-col justify-center items-center text-red-600 max-w-min">
						<CrossCircledIcon className="h-5" />
						<span className="text-xs">{error}</span>
					</div>
				)}
			</div>
		);
	},
);

InputDigit.displayName = "InputDigit";
