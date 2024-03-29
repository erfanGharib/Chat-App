import Error from "../components/httpError";

const Page403 = () => (
    <Error errCode={403} errMsg="You Don't have permission to access this page." />
)

export default Page403;
