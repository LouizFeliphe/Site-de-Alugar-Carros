import { assetsListados } from "../assets/assets";
import Titulo from "./Titulo";

const TestemunhosComponente = () => {
    const testemunhos = [
        {
            nome: "Richard Nelson",
            foto: "https://www.shutterstock.com/image-vector/round-brazilian-flag-on-transparent-600nw-2632507125.jpg",
            nota: 3,
            data: "12 Jan 2025",
            comentario: "“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”"
        },
        {
            nome: "Richard Nelson",
            foto: "https://www.shutterstock.com/image-vector/round-brazilian-flag-on-transparent-600nw-2632507125.jpg",
            nota: 5,
            data: "12 Jan 2025",
            comentario: "“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”"
        },
        {
            nome: "Richard Nelson",
            foto: "https://www.shutterstock.com/image-vector/round-brazilian-flag-on-transparent-600nw-2632507125.jpg",
            nota: 1,
            data: "12 Jan 2025",
            comentario: "“Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!”"
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center w-full my-10">
            <div className="max-sm:w-80">
                <Titulo titulo="O que os nossos clientes falam ?" subTitulo="Entenda o motivo da escolha das pessoas pelos nossos serviços" alinhar="" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto py-6 ">
                {testemunhos.map((testemunho,index) => {
                    return (
                        //testemunho card
                        <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1" key={index}>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                   {[...Array(testemunho.nota)].map((_, i) => (
                                        <img key={i} src={assetsListados.estrela} alt="estrela" className="h-4 w-4"/>
                                   ))}
                                </div>
                                <p>{testemunho.data}</p>
                            </div>
                            <p>{testemunho.comentario}</p>
                            <div className="flex items-center gap-2 pt-3">
                                <img className="h-8 w-8 rounded-full" src={testemunho.foto} alt="Richard Nelson" />
                                <p className="font-medium text-gray-800">{testemunho.nome}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default TestemunhosComponente;
