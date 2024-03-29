import Link from "next/link";
import Layout from "./layout";
import MainHead from "./mainHead";

const Error = ({ errCode, errMsg }) => {
    return (
        <>
            <MainHead title={`${errCode} ${errMsg}`} robots="noindex,nofollow" />
            <Layout>
                <div className="f-center h-full my-auto w-full flex-col">
                    <h1 className="text-6xl font-semibold">{errCode}</h1>
                    <p className="f-center">
                        {errMsg}
                        <Link href='/' className='link ml-1'>
                            Home Page
                        </Link>
                    </p>
                </div>
            </Layout>
        </>
    )
}
export default Error;