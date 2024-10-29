import { Logo } from "@/assets/svg/Logo";
import { Transition } from "@headlessui/react";
import { Spinner } from "@views/components/spinner";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
	return (
		<Transition
			show={isLoading}
			enter="transition-opacity duration-75"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="bg-blue fixed top-0 left-0 w-full h-full grid place-items-center">
				<div className="flex flex-col items-center gap-4">
					<h3 className='text-white'><Logo/></h3>
					<Spinner className='fill-darkblue text-white'/>
				</div>
			</div>
		</Transition>
	);
}
