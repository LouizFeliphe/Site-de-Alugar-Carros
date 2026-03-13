import { Outlet } from "react-router-dom"
import NavBarProprietario from "../../components/proprietario/NavBarProprietario"
import SideBar from "../../components/proprietario/SideBar"

const Layout = () =>{
    return (
        <div className="flex flex-col">
            <NavBarProprietario/>
            <div className="flex">
                <SideBar/>
                <div className="p-5">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout