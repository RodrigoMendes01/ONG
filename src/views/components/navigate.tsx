import { ArrowLeftIcon } from "@radix-ui/react-icons";

interface Props {
  title: string
}

export function Navigate({ title }: Props) {
	return (
		<button
			type="button"
			onClick={() => window.history.back()}
			className="flex items-center gap-2"
		>
			<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white focus:outline-none hover:bg-green-600/10 hover:transition-all">
				<ArrowLeftIcon className="h-8 w-8 text-green-700" />
			</div>
			<p className="font-medium text-gray-800">Voltar para {title}</p>
		</button>
	);
}
