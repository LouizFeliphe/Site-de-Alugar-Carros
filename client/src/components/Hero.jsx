import { useState } from "react";
import { assetsListados, listaDeCidades } from "../assets/assets";


const Hero = () =>{

    const [localRemocao, setLocalRemocao] = useState("");


    return (
        <div className='flex flex-col
        items-center justify-start gap-3 bg-light text-center '>  
        <div className="flex max-lg:flex-col justify-center items-center gap-5 py-2 overflow-hidden">
            <div className="overflow-hidden lg:h-70 max-lg:h-55 max-md:h-40">
                <img src={assetsListados.CarroPagina} alt="carro" className="w-full h-full border-4 border-black shadow-lg object-cover transition-transform duration-500 hover:scale-105"/>
            </div> 
            <div className="flex flex-col gap-3 xl:w-195 w-135 max-sm:w-80 h-60 ">
                <div className="flex justify-center items-center gap-7 ">
                <h1 className="text-2xl font-semibold">T-20 : Beleza e Velocidade</h1>
                <button className="flex max-sm:hidden items-center justify-center gap-1 px-9 py-3 bg-[#262626] hover:bg-[#585858] text-white rounded-full cursor-pointer text-black">
                    <img src={assetsListados.maisBranco} alt="search" className="h-3" />
                    Sobre
                </button>
                </div>
                <p className="px-5 text-md text-gray-500 overflow-y-auto text-justify">É um prazer apresentar este magnífico veículo! Prepare-se para conhecer uma máquina que redefine o conceito de performance, exclusividade e estilo. O estilo deste supercarro, com a cabine avançada, os faróis de formato elipsoidal e o splitter frontal proeminente, lembra o design de fabricantes de nicho e alta exclusividade. Ele carrega a inspiração de marcas que se dedicam a criar veículos feitos à mão e com produção limitadíssima, onde a engenharia se encontra com a arte, como a Pagani, a Koenigsegg ou a Savage Rivale. Trata-se de um veículo que não busca apenas ser rápido, mas sim ser uma obra de arte sobre rodas. Possivelmente, um produto de uma boutique de hipercarros, onde cada detalhe é meticulosamente planejado para o máximo de performance e o mínimo de concessões.</p>
            </div>     
        </div>
        <div className="flex justify-center items-center gap-5">
            <h2 className="text-xl text-grey">Procure outros carros aqui </h2>
            <img src={assetsListados.setaBaixo} className="sm:h-20 h-10" alt="iconeSeta" />
        </div>
        
        <form className="flex flex-col md:flex-row items-start max-md:items-center max-md:justify-center justify-between p-6 mb-4 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">

            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
                <div className="flex flex-col items-start gap-2">
                    <select required value={localRemocao} onChange={(evento)=>setLocalRemocao(evento.target.value)}>
                        <option value="">Local da Remoção</option>
                        {listaDeCidades.map((cidade, index)=><option key={index} value={cidade}>{cidade}</option>)}
                    </select>
                    <p className="px-1 text-sm text-gray-500">{localRemocao ? localRemocao: "Selecionar"}</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <label htmlFor="dataRemocao">Data Remoção</label>
                    <input type="date" id="dataRemocao" min={new Date().toISOString().split('T')[0]} className="text-sm text-gray-500" required/>
                </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="dataRetorno">Data Retorno</label>
                    <input type="date" id="dataRetorno" className="text-sm text-gray-500" required/>
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