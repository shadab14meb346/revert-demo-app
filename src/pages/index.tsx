import RevertConnectCom from "@components/revert-connect";
import type {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>NextJS + Tailwind in TS - Starter Template</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-8">
				<RevertConnectCom />
			</main>
		</div>
	);
};

export default Home;
