import { useEffect, useState } from "react"
import { assetsListados, painelDados } from "../../assets/assets"
import Titulo from "../../components/Titulo"



const Dashboard = () => {

    const moeda = import.meta.env.VITE_MOEDA

    const [data,setData] = useState({
    totalCarros: 0,
    totalReservas: 0,
    pendingReservas: 0,
    completoReservas: 0,
    recenteReservas: [],
    mensalLucro: 0,
    })

    const dashboardData = [
        {titulo: "Total Carros", valor: data.totalCarros, icon: assetsListados.estrela},
        {titulo: "Total Reservas", valor: data.totalReservas, icon: assetsListados.estrela},
        {titulo: "Pendentes", valor: data.pendingReservas, icon: assetsListados.estrela},
        {titulo: "Concluídas", valor: data.completoReservas, icon: assetsListados.estrela},
    ]

    useEffect(()=>{
        setData(painelDados)
    },[])

    return (
        <div className="pr-5">
            
            <Titulo titulo={"Painel do Administrador"} subTitulo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim nostrum, voluptatem debitis ex nesciunt dicta beatae quasi corrupti facilis quia in quas."} alinhar={"left"}/>
            <div className="flex items-center justify-between flex-wrap gap-5">
                {dashboardData.map((item, index) => {
                    return (
                        <div className="flex items-center gap-10 border-1 border-borderColor rounded-md px-4 py-2 mt-7" key={index}>
                            <div className="flex flex-col justify-center gap-1">
                                <p className="text-xl">{item.titulo}</p>
                                <span className="text-2xl font-semibold">{item.valor}</span>
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                                <img src={item.icon} alt="carro" className="h-6"/>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="flex flex-col w-[60%] gap-2 mt-6 border-1 border-borderColor rounded-md px-4 py-2">
                    <div className="flex flex-col">
                        <span className="text-2xl">Reservas Recentes</span>
                        <p className="text-md text-gray-500 text-left max-w-[65%] mt-1">Últimas reservas realizadas</p>
                    </div>
                    {data.recenteReservas.map((reserva, index) => {
                        return (
                            <div className="flex justify-between gap-5 mt-4" key={index}>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <img src={assetsListados.estrela} alt="imagem" className="h-5" />
                                        <div className="flex flex-col">
                                            <span className="text-md text-gray-500">{reserva.carro.marca} {reserva.carro.modelo}</span>
                                            <span className="text-md text-gray-500">{reserva.createdAt.split('T')[0]}</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <span className="text-md text-gray-500">{`${moeda} ${reserva.preco}`}</span>
                                <span className="border-1 border-borderColor rounded-md px-3 py-1">{reserva.status}</span>
                            </div>
                        )
                    })}

                </div>
                <div className="flex flex-col w-70 h-50 gap-2 mt-6 border-1 border-borderColor rounded-md px-5 py-3">
                    <span className="text-2xl">Lucro Mensal</span>
                    <p className="text-md text-gray-500 text-left max-w-[65%] mt-1">Lucro por mês atual</p>
                    <span className="text-blue-500 text-4xl font-extrabold mt-3">{moeda}{data.mensalLucro}</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 