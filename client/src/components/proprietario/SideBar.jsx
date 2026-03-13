import { useState } from "react"
import { assetsListados, dadosFalsosProprietarioLinks, dadosFalsosUsuario } from "../../assets/assets"
import { NavLink, useLocation } from "react-router-dom"

const SideBar = () => {

    const usuario = dadosFalsosUsuario
    const localizacao = useLocation();
    const [image, setImage] = useState();

    const atualizarImagem = async () => {
        usuario.image = URL.createObjectURL(image)
        setImage('')
    }

    return (
        <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-[20%] w-full border-r border-borderColor text-sm ">
            <div className="group relative overflow-hidden">
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : usuario?.image || assetsListados.usuario} alt="usuariofoto" className="h-9 md:h-25 w-9 md:w-25 rounded-full object-cover border-3 border-black mx-auto" />
                    <input type="file" id="image" accept="image/*" hidden onChange={e => setImage(e.target.files[0])} />
                    <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
                        <img src={assetsListados.pesquisaIcone} alt="pesquisa" className="h-5" />
                    </div>
                </label>
            </div>
            {image && (
                <button className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/50 text-primary cursor-pointer" onClick={atualizarImagem}>Salvar <img src={assetsListados.pesquisaIcone} className="h-4" /></button>
            )}
            <p className="mt-2 max-md:hidden">{usuario?.nome}</p>

            <div className="w-full">
                {dadosFalsosProprietarioLinks.map((link, index) => {

                    const ativo = link.caminho === localizacao.pathname;

                    return (
                        <NavLink
                            key={index}
                            to={link.caminho}
                            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 
                            ${ativo ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
                        >
                            <img
                                src={ativo ? link.iconeColorido : link.icone}
                                alt="icone"
                                className={`${link.nome === "Dashboard" ? 'h-6' : 'h-4'}`}
                            />
                            <span className="max-md:hidden">{link.nome}</span>

                            <div
                                className={`${ativo ? 'bg-primary' : ''} w-1.5 h-8 rounded-md absolute right-0`}
                            ></div>
                        </NavLink>
                    );
                })
                }
            </div>
        </div>
    )
}

export default SideBar