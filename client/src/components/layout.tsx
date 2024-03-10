import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (
  { children, ADD_SPACE = true, className = '' }: 
  { children: any, ADD_SPACE?: boolean, className?: string }
) => {
    return (
        <div className="h-full w-full flex flex-col">
            <Navbar />
            <div className={`${className} ${ADD_SPACE ? 'md:mt-24 mt-20 max-w-[1200px] w-[88%] mx-auto' : 'w-full'} h-full f-center-start flex-col`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;