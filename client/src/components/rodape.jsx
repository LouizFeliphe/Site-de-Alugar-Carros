import { assetsListados } from "../assets/assets";

const RodapeSite = () => {
    return (
        <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black/87">
            <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                <a href="">
                   <img src={assetsListados.carroRodape} alt="logo" className="h-25" />
                </a>
                <div>
                    <p className="text-slate-100 font-semibold">Produtos</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Suporte</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Preços</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Afiliados</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-slate-100 font-semibold">Recursos</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="hover:text-indigo-600 transition">Companhia</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Communidade</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Carreiras</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Sobre</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-slate-100 font-semibold">Legal</p>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="hover:text-indigo-600 transition">Privacidade</a></li>
                        <li><a href="/" className="hover:text-indigo-600 transition">Termos</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                <p className="max-w-60">Aumentando a velocidade e eficiência dos nossos clientes sempre.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="/" target="_blank" rel="noreferrer">
                        <img src={assetsListados.linkedin} alt="linkedin" className="h-5"/>
                    </a>
                    <a href="/" target="_blank" rel="noreferrer">
                        <img src={assetsListados.twitter} alt="twitter" className="h-5 invert"/>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={assetsListados.youtube} alt="youtube" className="h-8"/>
                    </a>
                </div>
                <p className="mt-3 text-center">© {new Date().getFullYear()} <a href="">Alucarr</a></p>
            </div>
        </footer>
    );
};

export default RodapeSite;    