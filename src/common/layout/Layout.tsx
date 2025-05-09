import { Navbar } from "./Navbar"

export const Layout = ({ children }: any) => {

  

    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
            
            <Navbar/>
            <main className="w-full flex justify-center">
                {children}
            </main>
        </div>
    )
}
