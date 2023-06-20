import React, { ComponentProps, useCallback, useEffect, useState } from "react";

function CopyIcon() {
	return (
		<svg
			width="18"
			height="24"
			viewBox="0 0 13 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.33594 4.13867V2.73242C3.33594 2.12305 3.48633 1.66406 3.78711 1.35547C4.0918 1.04687 4.54688 0.892578 5.15234 0.892578H7.39648C7.71289 0.892578 7.99609 0.9375 8.24609 1.02734C8.49609 1.11328 8.72461 1.26367 8.93164 1.47852L11.8906 4.48438C12.1094 4.71094 12.2617 4.94922 12.3477 5.19922C12.4336 5.44922 12.4766 5.75391 12.4766 6.11328V10.8711C12.4766 11.4805 12.3242 11.9395 12.0195 12.248C11.7188 12.5566 11.2656 12.7109 10.6602 12.7109H9.45312V11.7676H10.6074C10.9121 11.7676 11.1426 11.6895 11.2988 11.5332C11.4551 11.373 11.5332 11.1465 11.5332 10.8535V5.84375H8.79102C8.45508 5.84375 8.20312 5.76172 8.03516 5.59766C7.87109 5.43359 7.78906 5.18164 7.78906 4.8418V1.83594H5.19922C4.89453 1.83594 4.66406 1.91602 4.50781 2.07617C4.35547 2.23242 4.2793 2.45703 4.2793 2.75V4.13867H3.33594ZM8.63867 4.70117C8.63867 4.80664 8.66016 4.88281 8.70312 4.92969C8.75 4.97266 8.82422 4.99414 8.92578 4.99414H11.2871L8.63867 2.29883V4.70117ZM0.494141 13.7949V5.65625C0.494141 5.04688 0.644531 4.58789 0.945312 4.2793C1.25 3.9707 1.70508 3.81641 2.31055 3.81641H4.37891C4.70703 3.81641 4.97852 3.85156 5.19336 3.92188C5.4082 3.99219 5.62695 4.14258 5.84961 4.37305L9.07812 7.66016C9.23438 7.82031 9.35156 7.97266 9.42969 8.11719C9.51172 8.25781 9.56641 8.41406 9.59375 8.58594C9.62109 8.75781 9.63477 8.96875 9.63477 9.21875V13.7949C9.63477 14.4043 9.48242 14.8633 9.17773 15.1719C8.87695 15.4805 8.42383 15.6348 7.81836 15.6348H2.31055C1.70508 15.6348 1.25 15.4805 0.945312 15.1719C0.644531 14.8672 0.494141 14.4082 0.494141 13.7949ZM1.4375 13.7773C1.4375 14.0703 1.51367 14.2949 1.66602 14.4512C1.82227 14.6113 2.05078 14.6914 2.35156 14.6914H7.77148C8.07227 14.6914 8.30078 14.6113 8.45703 14.4512C8.61328 14.2949 8.69141 14.0703 8.69141 13.7773V9.26562H5.38086C5.01758 9.26562 4.74219 9.17383 4.55469 8.99023C4.37109 8.80664 4.2793 8.5293 4.2793 8.1582V4.75977H2.35742C2.05273 4.75977 1.82227 4.83984 1.66602 5C1.51367 5.15625 1.4375 5.37891 1.4375 5.66797V13.7773ZM5.49219 8.38086H8.50977L5.16406 4.97656V8.05273C5.16406 8.16992 5.18945 8.25391 5.24023 8.30469C5.29102 8.35547 5.375 8.38086 5.49219 8.38086Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function CompleteIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-green-600 dark:text-green-400"
		>
			<path
				d="M4.31445 10.9434C4.08398 10.9434 3.88086 10.8301 3.70508 10.6035L0.664062 6.73047C0.605469 6.66016 0.5625 6.58984 0.535156 6.51953C0.507812 6.44531 0.494141 6.37305 0.494141 6.30273C0.494141 6.14258 0.546875 6.01172 0.652344 5.91016C0.757812 5.80469 0.892578 5.75195 1.05664 5.75195C1.25195 5.75195 1.41992 5.84766 1.56055 6.03906L4.29102 9.61328L9.55273 1.22852C9.62305 1.11914 9.69531 1.04297 9.76953 1C9.84375 0.953125 9.93945 0.929688 10.0566 0.929688C10.2168 0.929688 10.3457 0.978516 10.4434 1.07617C10.541 1.17383 10.5898 1.30273 10.5898 1.46289C10.5898 1.5332 10.5781 1.60352 10.5547 1.67383C10.5312 1.74023 10.4941 1.81445 10.4434 1.89648L4.90625 10.6152C4.76172 10.834 4.56445 10.9434 4.31445 10.9434Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function CopyToClipboard({
	getValue,
	...props
}: { getValue: () => string } & ComponentProps<"button">) {
	const [isCopied, setCopied] = useState(false);

	useEffect(() => {
		if (!isCopied) return;
		const timerId = setTimeout(() => {
			setCopied(false);
		}, 2000);

		return () => {
			clearTimeout(timerId);
		};
	}, [isCopied]);

	const handleClick = useCallback<
		NonNullable<ComponentProps<"button">["onClick"]>
	>(async () => {
		setCopied(true);
		if (!navigator?.clipboard) {
			console.error(
				"Error: No access to clipboard, cannot copy code block."
			);
		}
		try {
			await navigator.clipboard.writeText(getValue());
			console.log("Success: Copied to clipboard.");
		} catch {
			console.error(
				"Error: Failed to copy to clipboard. Please try again."
			);
		}
	}, [getValue]);

	const Icon = isCopied ? CompleteIcon : CopyIcon;

	return (
		<button
			onClick={handleClick}
			title="Copy to clipboard"
			{...props}
			className="rounded-lg h-10 w-10 min-w-12 grid place-items-center
			text-gray-600 dark:text-gray-400
			border-[1.5px] border-gray-300 dark:border-gray-700
			hover:bg-gray-200 dark:hover:bg-gray-800
			hover:border-gray-400 dark:hover:border-gray-500 group-hover:opacity-100 opacity-0 transition-all
			active:scale-90"
		>
			<Icon />
		</button>
	);
}
