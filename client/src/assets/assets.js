import carroLogo from './carroLogo.svg';
import menu from './list.svg';
import xFechar from './xCircle.svg';
import PesquisaIcone from './search.svg';
import CarroPagina from './carroGoogl.png';
import setaBaixo from './setaBaixo.svg';
import mais from './mais.svg';
import carroIcone from './carroIcone.svg';
import gasolinaIcone from './gasolinaIcone.svg';
import localIcone from './localIcone.svg';
import usuario from './usuario.svg';
import carroGoogl from './carroGoogl.png';
import maisBranco from './maisBranco.svg';
import opala from './opala.png';
import estrela from './estrela.svg';
import carroRodape from './logomarca.png';
import setaEsquerda from './setaEsquerda.svg';
import twitter from './x.svg';
import youtube from './youtube.svg';
import linkedin from './linkedin.svg';

export const dadosFalsosCarro = [
    {
        _id: 1,
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        isDisponivel: true,
        precoPorDia: 150,
        categoria: "Sedan",
        capacidadeAssento: 5,
        tipoCombustivel: "Gasolina",
        trasmissao: "Automática",
        localizacao: "São Paulo",
        image: carroGoogl,
    },
    {
        _id: 2,
        marca: "Honda",
        modelo: "Civic",
        ano: 2019,
        isDisponivel: false,
        precoPorDia: 140,
        categoria: "Sedan",
        capacidadeAssento: 5,
        tipoCombustivel: "Flex",
        trasmissao: "Manual",
        localizacao: "Rio de Janeiro",
        image: carroGoogl,
    },
    {
        _id: 3,
        marca: "Ford",
        modelo: "Focus",
        ano: 2018,
        isDisponivel: true,
        precoPorDia: 130,
        categoria: "Hatchback",
        capacidadeAssento: 5,
        tipoCombustivel: "Diesel",
        trasmissao: "Automática",
        localizacao: "Belo Horizonte",
        image: carroGoogl,
    },
    {
        _id: 4,
        marca: "Chevrolet",
        modelo: "Cruze",
        ano: 2021,
        isDisponivel: true,
        precoPorDia: 160,
        categoria: "Sedan",
        capacidadeAssento: 5,
        tipoCombustivel: "Gasolina",
        trasmissao: "Automática",
        localizacao: "Curitiba",
        image: "https://blog.autocompara.com.br/wp-content/uploads/2024/06/carros-esportivos-1024x683.jpeg", 
    }
]

export const listaDeCidades = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Curitiba",
    "Salvador",
    "Fortaleza",
]

export const assetsListados={
    carroLogo: carroLogo,
    menu: menu,
    fechar: xFechar,
    pesquisaIcone: PesquisaIcone,
    CarroPagina: CarroPagina,
    setaBaixo: setaBaixo,
    mais: mais,
    maisBranco: maisBranco,
    carroIcone: carroIcone,
    combustivelIcone: gasolinaIcone,
    localizacaoIcone: localIcone,
    iconeUsuario: usuario,
    opala: opala,
    estrela: estrela,
    carroRodape: carroRodape,
    setaEsquerda: setaEsquerda,
    twitter: twitter,
    youtube: youtube,
    linkedin: linkedin,
}