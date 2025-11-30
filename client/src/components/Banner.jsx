import { assetsListados } from "../assets/assets";

const BannerSite = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-start items-center justify-between
        px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0c0c17] to-[#a3a3a8] max-w-4xl max-lg:max-w-3xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
            
            <div className="text-white">
                <h2 className="text-3xl font-medium">Possui um "carrão" dando sopa por aí ?</h2>
                <p className="mt-2">Gere renda a partir dele ao listá-lo em nosso site !</p>
                <p className="max-w-130">Seguro, verificação da licença e o método de pagamento serão todos por nossa conta, você ganhará a renda passiva, livre de estresse. </p>
                <button className="px-6 py-2 mb-4 bg-white hover:bg-gray-300 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer">Liste seu carro aqui</button>
            </div>
            
            <img src={assetsListados.opala} alt="carroBanner" className="max-h-70 transition-transform duration-500 hover:scale-105" />
        </div>
    )
}
export default BannerSite;