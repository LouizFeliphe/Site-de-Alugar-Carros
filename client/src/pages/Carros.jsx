import { useState } from "react";
import { assetsListados, dadosFalsosCarro } from "../assets/assets";
import Titulo from "../components/Titulo";
import Card_Carros from "../components/CardCarroComponent";

const Carros = ()=>{

    const [inputValue, setInputValue] = useState("");


    return (
        <div className="mb-10">
            <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
                <Titulo titulo='Carros Disponíveis' subTitulo='Explore nossa seleção de carros de alto padrão disponíveis'/>

                <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
                    <img src={assetsListados.pesquisaIcone} alt="pesquisa" className="w-4.5 h-4.5 mr-2"/>
                    <input onClick={(e)=>{
                        setInputValue(e.target.value);
                    }} value={inputValue} type="text" placeholder="Procure por marca, modelo ou características" className="w-full h-full outline-none text-gray-500"/>
                    <img src={assetsListados.filtro} alt="filtro" className="w-4.5 h-4.5 ml-2"/>
                </div>
            </div>

            <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
                <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">Mostrando {dadosFalsosCarro.length} Carro{"(s)"}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
                    {dadosFalsosCarro.map((carro,index)=>{
                       return (<div key={index}>
                        <Card_Carros carro={carro}/>
                       </div>) 
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Carros;