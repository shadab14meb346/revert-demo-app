import {useRevertConnect, RevertConnect} from "@revertdotdev/revert-react";
import {useEffect, useState} from "react";

const RevertConnectCom = () => {
	const [isClient, setIsClient] = useState(false);
	const configObject = {
		revertToken: "test",
		tenantId: "test",
	};
	const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

	useEffect(() => {
		if (isBrowser()) {
			setIsClient(true);
		}
	}, []);
	// const {loading, error, open} = useRevertConnect({config: configObject});
	if (!isClient) return <h1>Loading...</h1>;
	return (
		// <button
		// 	disabled={loading || Boolean(error)}
		// 	id="revert-connect-button"
		// 	onClick={() => open()}
		// 	style={{
		// 		padding: 10,
		// 		outline: "none",
		// 		background: "rgb(39, 45, 192)",
		// 		border: "1px solid rgb(39, 45, 192)",
		// 		borderRadius: 5,
		// 		cursor: "pointer",
		// 		color: "#fff",
		// 	}}>
		// 	{"Connect your CRM"}
		// </button>
		<RevertConnect config={configObject} />
	);
};

export default RevertConnectCom;
