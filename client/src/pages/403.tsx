import Head from "next/head";
import Error from "../components/httpError";

const Page403 = () => (
    <>
        <Head>
            <title>403 | Forbidden</title>
            <meta name="robots" content="noindex,nofollow" />
            <meta name="description" content="Forbidden" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Error errCode={403} errMsg="You Don't have permission to access this page." />
    </>
)

export default Page403;
