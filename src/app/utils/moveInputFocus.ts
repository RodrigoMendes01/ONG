import { KeyboardEvent } from "react";

interface Props {
  event: KeyboardEvent<HTMLInputElement>
  current: number
  next: number
}

type Output = void

type NextElement = HTMLInputElement | null

export function moveFocus({ event, next }: Props): Output {
	const target = event.target as HTMLInputElement;

	if (target.value.length === 1 && next <= 4) {
		const nextElement = document.getElementById(`box${next}`) as NextElement;
		if (nextElement) nextElement.focus();
	}
}
