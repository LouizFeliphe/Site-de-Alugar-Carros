import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assetsListados, dadosFalsosCarro } from "../assets/assets";
import CarregarPagina from "../components/Carregamento";


const DetalhesCarro = () => {

    const { id } = useParams();
    const navegar = useNavigate();
    const [carro, setCarro] = useState(null);
    const moeda = import.meta.env.VITE_MOEDA;

    const enviarFuncao = async (e) => { 
        e.preventDefault()
    };

    useEffect(() => {
        setCarro(dadosFalsosCarro.find((carro1) => carro1._id === parseInt(id)));
    }, [id])


    return carro ? (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-7 mb-16">

            <button onClick={() => {
                navegar(-1);
            }} className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
                <img src={assetsListados.setaEsquerda} alt="seta" className="rotate-180 opacity-65 invert h-4" />
                Voltar
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                <div className="lg:col-span-2">
                    <img src={carro.image} alt="carrofoto" className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md border-1 border-black" />
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">{carro.marca} {carro.modelo}</h1>
                            <p className="text-gray-500 text-lg">{carro.categoria} • {carro.ano}</p>
                        </div>
                        <hr className="border-borderColor my-6" />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { icone: assetsListados.iconeUsuario, texto: `${carro.capacidadeAssento} Assentos` },
                                { icone: assetsListados.combustivelIcone, texto: carro.tipoCombustivel },
                                { icone: assetsListados.carroIcone, texto: carro.trasmissao },
                                { icone: assetsListados.localizacaoIcone, texto: carro.localizacao },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center bg-light p-4 rounded-lg shadow-md gap-2 transition-transform duration-300 hover:-translate-y-3">
                                    <img src={item.icone} alt={item.texto} className="h-5 mb-2" />
                                    <p className="text-gray-600 text-center">{item.texto}</p>
                                </div>
                            ))
                            }
                        </div>

                        <div>
                            <h1 className="text-xl font-medium mb-3">Descrição</h1>
                            <p className="text-gray-500">{carro.descricao}</p>
                        </div>

                        <div>
                            <h1 className="text-xl font-medium mb-3">Características</h1>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    "Ar Condicionado",
                                    "Direção Hidráulica",
                                    "Vidros Elétricos",
                                    "Freios ABS",
                                    "Airbags",
                                    "Bluetooth",
                                    "Câmera de Ré",
                                    "Sensor de Estacionamento",
                                ].map((caracteristica, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-500">
                                        <img src={assetsListados.lapis} alt="lapisCerto" className="h-4" />
                                        {caracteristica}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Formulario */}               
                <form onSubmit={enviarFuncao} className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
                    
                    <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">{moeda}{carro.precoPorDia} <span className="text-base text-gray-400 font-normal"> por dia </span> </p>

                    <hr className="border-borderColor my-6"/>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="data-remocao">Data de Remoção</label>
                        <input type="date" className="border border-borderColor px-3 py-2 rounded-lg" required id="data-remocao" min={new Date().toISOString().split('T')[0]}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="data-retorno">Data de Retorno</label>
                        <input type="date" className="border border-borderColor px-3 py-2 rounded-lg" required id="data-retorno" min={new Date().toISOString().split('T')[0]}/>
                    </div>

                    <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">Alugar agora</button>

                </form>
            </div>

        </div>

    ) : <CarregarPagina />
}

export default DetalhesCarro;