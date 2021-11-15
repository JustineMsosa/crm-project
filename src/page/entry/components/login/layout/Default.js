import { Footer } from "./patials/Footer";
import { Header } from "./patials/Header";

export const Default = ({children }) =>{
    return(
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
            <main className="main">{children}</main>
            <footer className="footer">
                <Footer /> 
            </footer> 
        </div>
    )

}