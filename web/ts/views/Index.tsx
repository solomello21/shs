import React from "react";
import PWAInstaller from "pwa-installer-react";

export const route = "/";

export default function View(): JSX.Element {
	return (
		<>
			<p>get started by editing `~/my-app/src/ts/views/Index.tsx::View`</p>
			<PWAInstaller/>
		</>
	);
}
