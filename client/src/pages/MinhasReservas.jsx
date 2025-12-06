import { useEffect, useState } from "react";
import { dadosFalsosReservas } from "../assets/assets";
import Titulo from "../components/Titulo";

const MinhasReservas = () => {

    const [reservas, setReservas] = useState([]);

    const fetchReservas = () => {
        setReservas(dadosFalsosReservas);
    }

    useEffect(()=>{
        fetchReservas();
    },[])
    
    return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-10 text-sm max-w-7xl mb-15">
       <Titulo titulo="Minhas reservas" subTitulo="Visualize e gerencie todas as suas reservas" alinhar="left"/>

       <div>
        {reservas.map((reserva, index)=>{
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
                            <p className="px-3 py-1.5 bg-light rounded">Reserva #{index+1}</p>
                            <p className={`px-3 py-1 text-xs rounded-full ${reserva.status === 'confirmado' ? 'bg-green-400/15 text-green-600' : 'bg-red-400/15 text-red-600'}`}>{reserva.status}</p>
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