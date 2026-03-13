import { useEffect, useState } from "react";
import { assetsListados, dadosFalsosReservas } from "../assets/assets";
import Titulo from "../components/Titulo";

const MinhasReservas = () => {

    const [reservas, setReservas] = useState([]);
    const moeda = import.meta.env.VITE_MOEDA;

    const fetchReservas = () => {
        setReservas(dadosFalsosReservas);
    }

    useEffect(() => {
        fetchReservas();
    }, [])

    const AnoDiaMes = (data) => {

        const diaMesAno =  data.split('T')[0].split('-')

        return <p>{`${diaMesAno[2]} | ${diaMesAno[1]} | ${diaMesAno[0]}`}</p>
    }


    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-10 text-sm max-w-7xl mb-15">
            <Titulo titulo="Minhas reservas" subTitulo="Visualize e gerencie todas as suas reservas" alinhar="left" />

            <div>
                {reservas.map((reserva, index) => {
                    return (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg first:mt-12 mb-8">
                            <div className="md:col-span-1">
                                <div className="rounded-md overflow-hidden mb-3">
                                    <img src={reserva.carro.image} alt="carroimagem" className="w-full h-auto aspect-video object-cover" />
                                </div>
                                <p className="text-lg font-medium mt-2">{
                                    `${reserva.carro.marca} ${reserva.carro.modelo} `
                                }</p>
                                <p className="text-gray-500">{reserva.carro.ano} ° {reserva.carro.categoria} ° {reserva.carro.localizacao}</p>
                            </div>

                            <div className="md:col-span-2">
                                <div className="flex items-center gap-2">
                                    <p className="px-3 py-1.5 bg-light rounded">Reserva #{index + 1}</p>
                                    <p className={`px-3 py-1 text-xs rounded-full ${reserva.status === 'confirmado' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}>{reserva.status}</p>
                                </div>

                                <div className="flex items-start gap-2 mt-2">
                                    <img src={assetsListados.calendario} alt="calendario" className="w-3 h-3 mt-1" />

                                    <div>
                                        <p className="text-gray-500 mb-2">Período de Aluguel</p>
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="flex items-center justify-center gap-2">
                                                <img src={assetsListados.tempoAzul} alt="tempo" className="h-4"/>
                                                <p className="text-justify ">Remoção: </p>
                                                {AnoDiaMes(reserva.dataRemocao)}
                                            </div>
                                            <div className="flex items-center justify-center gap-2 pr-1">
                                                <img src={assetsListados.tempoLaranja} alt="tempo" className="h-4"/>
                                                <p className="text-justify ">Retorno: </p>
                                                {AnoDiaMes(reserva.dataRetorno)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mt-3">
                                    <img src={assetsListados.localRemocao} alt="calendario" className="w-5 h-5 mt-1" />
                                    <div>
                                        <p className="text-gray-500 mt-1">Local da Remoção</p>
                                        <p>{reserva.carro.localizacao}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="md:col-span-1 flex flex-col justify-between gap-6">
                                <div className="text-sm text-gray-500 text-right">
                                    <p>Preço Total</p>
                                    <h1 className="text-2xl font-semibold text-primary">{moeda}{reserva.preco}</h1>
                                    <p>Reservado em <span className="font-semibold">{AnoDiaMes(reserva.createdAt)}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MinhasReservas;