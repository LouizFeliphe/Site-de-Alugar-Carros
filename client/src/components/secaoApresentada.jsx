import { assetsListados, dadosFalsosCarro } from "../assets/assets"
import Titulo from "./Titulo"
import {useNavigate} from "react-router-dom"
import Card_Carros from "./CardCarroComponent.jsx"

const SecaoMostrada = () => { 

    const navegar = useNavigate();

    return (
        <div className="flex flex-col items-center py-11 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex jutify-center items-center gap-5 w-full">
                <hr className="w-full"/>
                <Titulo titulo="Veiculos Legais" subTitulo="Adoro beijo na boca, beijo na boca me dá tesão ! How have you forsaken me ? " alinhar="fer"/>
                 <hr className="w-full"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
            {
               dadosFalsosCarro.slice(0,6).map((carro)=>{
                return (
                    <div key={carro._id}>
                        <Card_Carros carro={carro}/>
                    </div>
                )
               })
            }
            </div>

            <button style={{ borderColor: 'var(--color-borderColor' }}
            className="flex items-center justify-center gap-2 px-6 py-6 border hover:bg-gray-50 rounded-md mt-18 cursor-pointer" onClick={()=>{
                navegar('/carros')
                scrollTo(0,0);
            }}>
                Explore todos os carros <img src={assetsListados.mais} alt="seta" className="h-10" />
            </button>
        </div>
    )

}

export default SecaoMostrada