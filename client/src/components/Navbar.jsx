import { useState } from 'react';
import { assetsListados } from '../assets/assets.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({setMostarLogin}) => {
    const localizacao = useLocation();
    const [open, setOpen] = useState(false);
    const navegar =  useNavigate();

    const menuLinks = [
        { name: 'Home', path: '/' },
        { name: 'Carros', path: '/carros' },
        { name: 'Minhas Reservas', path: '/minhas-reservas' }
    ]

    return (
        <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
        ${localizacao.pathname === "/" && "bg-light"}`}>

            <Link to='/' className='flex flex-row items-center gap-2 text-2xl font-bold'>
                <img src={assetsListados.carroLogo} alt='logo' className='h-15'/>
                <p className='logoTitulo text-4xl'>AluCarr</p>
            </Link>

            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${localizacao.pathname === "/" ? "bg-light" : "bg-white"}
            ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}
            `}>
                {menuLinks.map((link,index)=>{
                    return(
                        <Link key={index} to={link.path}>
                            {link.name}
                        </Link>
                    )
                })}
                <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
                    <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Procurar produtos' />
                    <img src={assetsListados.pesquisaIcone} alt="search" className='h-4'/>
                </div>

                <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
                    <button onClick={()=>{
                        navegar('/painel')
                    }}className='cursor-pointer'>Painel</button>
                    <button onClick={()=>{
                        setMostarLogin(true);
                    }}className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Entrar</button>
                </div>
            </div>

            <button className='sm:hidden cursor-pointer' aria-label='Menu' onClick={()=>{
                setOpen(!open)
            }}>
                <img src={open ? assetsListados.fechar : assetsListados.menu} alt="menu" className='h-6'/>
            </button>

        </div>
    )
}

export default Navbar;