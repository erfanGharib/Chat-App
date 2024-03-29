import Error from "../components/httpError";

const Page404 = () => (
    <Error errCode={404} errMsg='Page Not Found.' />
)

export default Page404;
