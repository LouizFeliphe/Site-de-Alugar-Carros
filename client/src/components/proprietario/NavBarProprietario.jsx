import { Link } from "react-router-dom"
import { assetsListados, dadosFalsosUsuario } from "../../assets/assets"

const NavBarProprietario = () => {

    const usuario = dadosFalsosUsuario

    return (
        <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all">
            <Link to='/' className='flex flex-row items-center gap-2 text-2xl font-bold'>
                <img src={assetsListados.carroLogo} alt='logo' className='h-15'/>
                <p className='logoTitulo text-4xl'>AluCarr</p>
            </Link>
            <p>Bem-vindo, {usuario.nome || "Proprietário"}</p>
        </div>
    )
}

export default NavBarProprietario 