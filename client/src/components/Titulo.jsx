
const Titulo = ({titulo, subTitulo, alinhar}) => {
    return (
        <div className={`flex flex-col justify-center items-center text-center ${alinhar === "left" && "md:items-start md:text-left" }`}>
            <h1 className="font-semibold text-4xl md:text-[40px]">{titulo}</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-4 max-w-156">{subTitulo}</p>
        </div>  
    );
}  
export default Titulo;