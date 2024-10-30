import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import Footer from "./Footer";

export function Main(){
    return(
        <h2>
        <Header/>
        <br/>
        <Outlet/>
        <br/>
        <Footer/>
        </h2>
    )
}