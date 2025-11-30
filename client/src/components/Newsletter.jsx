import { assetsListados } from "../assets/assets";

const EmailInscricao = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-4xl lg:w-full max-lg:mx-auto max-lg:max-w-xl max-md:w-140 max-sm:w-75 rounded-2xl px-4 py-12 md:py-16 mx-2 max-sm:mx-auto lg:mx-auto my-15 bg-gray-800  space-y-3 text-white">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px] mb-3">Fique ligadinho !</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">Inscreva-se para as últimas ofertas de carros luxuosos com direito a desconto exclusivo</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <input type="text" className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" placeholder="Insira seu email" required/>
                <button className="flex items-center justify-center gap-2 group bg-primary px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all cursor-pointer hover:-translate-y-0.5 hover:bg-primary-dull">
                    <p>Assine</p>            
                    <img src={assetsListados.setaEsquerda} alt="setaEsquerda" className="h-3"/>
                </button>
            </div>
            <p className="text-gray-500 mt-6 text-xs text-center">Por se inscrever, você concorda com as nossas políticas de privacidade e aceita receber atualizações.</p>
        </div>

    );
};

export default EmailInscricao;