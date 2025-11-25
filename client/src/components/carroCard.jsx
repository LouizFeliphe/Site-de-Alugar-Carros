import { assetsListados } from "../assets/assets";

const carroCard = ({carro}) =>{
    
    const moeda = import.meta.env.MOEDA

    return (
        <div className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer">
            
            <div className="relative h-48 overflow-hidden">
                <img src={carro.image} alt="imagemCarro" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>

                {carro.isDisponivel && <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">Disponível Agora</p>}

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                    <span className="font-semibold">{moeda}{carro.precoPorDia}</span>
                    <span className="text-sm text-white/80"> / dia</span>
                </div>
            </div>

            <div className="p-4 sm:p-5">
                <div className="flex jusitfy-between itemns-start mb-2">
                    <div>
                        <h3 className="text-lg font-medium">{carro.marca} {carro.modelo}</h3>
                        <p className="text-muted-foreground text-sm">{carro.categoria} ° {carro.ano}</p>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img src={assetsListados.iconeUsuario} alt="usuario" className="h-4 mr-2" />
                        <span>{carro.capacidadeAssento} assentos</span>
                    </div>
                     <div className="flex items-center text-sm text-muted-foreground">
                        <img src={assetsListados.combustivelIcone} alt="usuario" className="h-4 mr-2" />
                        <span>{carro.tipoCombustivel}</span>
                    </div>
                     <div className="flex items-center text-sm text-muted-foreground">
                        <img src={assetsListados.carroIcone} alt="usuario" className="h-4 mr-2" />
                        <span>{carro.trasmissao}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <img src={assetsListados.localizacaoIcone} alt="usuario" className="h-4 mr-2" />
                        <span>{carro.localizacao}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default carroCard;