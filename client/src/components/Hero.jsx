import { useState } from "react";
import { assetsListados, listaDeCidades } from "../assets/assets";


const Hero = () => {

    const [localRemocao, setLocalRemocao] = useState("");


    return (
        <div className='flex flex-col
        items-center justify-start gap-3 bg-light text-center '>
            <div className="flex max-lg:flex-col justify-center items-center py-2">
                {/* <div className="overflow-hidden lg:h-47 max-lg:h-65 max-md:h-40">
                    <img src={assetsListados.CarroPagina} alt="carro" className="w-full h-full shadow-lg object-cover transition-transform duration-500 hover:scale-105" />
                </div> */}
                <div className="relative lg:h-40 lg:w-130 max-lg:h-45 max-md:h-40 max-sm:h-27">
                    {/* Imagem principal */}
                    <img
                        src={assetsListados.CarroPagina}
                        alt="carro"
                        className="w-full h-full object-cover"
                    />
                    {/* Reflexo */}
                    <img
                        src={assetsListados.CarroPagina}
                        alt="reflexo"
                        className="absolute left-0 right-0 bottom-[-2%] w-full h-full object-cover opacity-100 scale-y-[-2] blur-[0.6px] pointer-events-none"
                        style={{
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 55%)",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 50%)"
                        }}
                    />
                </div>
                <div className="flex justify-center items-center xl:w-195 w-135 max-sm:w-80 h-60 md:text-justify max-lg:mt-10">
                    <img src={assetsListados.quadrado} alt="quadrado" className="h-5 max-md:h-0 md:mb-30 md:mr-7" />
                    <h1 className="text-5xl max-sm:text-4xl">O carro que vai <br/><span className=" text-[#efb810] text-6xl max-sm:text-5xl drop-shadow-sm ">superar</span> <br/>a sua expectativa</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <h2 className="text-xl text-grey">Procure carros para alugar aqui </h2>
                <img src={assetsListados.setaBaixo} className="sm:h-20 h-10 transition-all duration-500 hover:-translate-y-3" alt="iconeSeta" />
            </div>

            <form className="flex flex-col md:flex-row items-start max-md:items-center max-md:justify-center justify-between p-6 mb-4 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">

                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
                    <div className="flex flex-col items-start gap-2">
                        <select required value={localRemocao} onChange={(evento) => setLocalRemocao(evento.target.value)}>
                            <option value="">Local da Remoção</option>
                            {listaDeCidades.map((cidade, index) => <option key={index} value={cidade}>{cidade}</option>)}
                        </select>
                        <p className="px-1 text-sm text-gray-500">{localRemocao ? localRemocao : "Selecionar"}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="dataRemocao">Data Remoção</label>
                        <input type="date" id="dataRemocao" min={new Date().toISOString().split('T')[0]} className="text-sm text-gray-500" required />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="dataRetorno">Data Retorno</label>
                        <input type="date" id="dataRetorno" className="text-sm text-gray-500" required />
                    </div>
                </div>
                <button className="flex items-center justify-center gap-1 px-9 py-3 max-md:mt-5 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer">
                    <img src={assetsListados.pesquisaIcone} alt="search" className="brightness-300" />
                    Procurar
                </button>

            </form>



        </div>
    )
}

export default Hero;