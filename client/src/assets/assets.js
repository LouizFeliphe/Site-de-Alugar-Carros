import carroLogo from './carroLogo.svg';
import menu from './list.svg';
import xFechar from './xCircle.svg';
import PesquisaIcone from './search.svg';
import CarroPagina from './carroGoogl.png';
import setaBaixo from './setaBaixo.svg';
import mais from './mais.svg';
import carroIcone from './carroIcone2.svg';
import gasolinaIcone from './gas.svg';
import localIcone from './localIcone.svg';
import usuario from './pessoaCarro.svg';
import carroGoogl from './carroGoogl.png';
import maisBranco from './maisBranco.svg';
import opala from './opala.png';
import estrela from './estrela.svg';
import carroRodape from './logomarca.png';
import setaEsquerda from './setaEsquerda.svg';
import twitter from './x.svg';
import youtube from './youtube.svg';
import linkedin from './linkedin.svg';
import lapis from './lapis.svg';
import bmw from './bmw.jpg';
import ferrari from './ferrari.jpg';
import OpaELamborghini from './HeroCars.png';
import opala2 from './Opala2.jpg';
import quadrado from './quadrado.svg';
import filtro from './filtro.svg';
import calendario from './calendario.svg';
import tempoAzul from './tempoAzul.svg';
import tempoLaranja from './tempoLaranja.svg';
import localRemocao from './localRemocao.svg';
import dashboard from './dashboard.svg'
import dashboardColorido from './dashboardColorido.svg'
import carPainel from './carPainel.svg'
import carPainelColorido from './carPainelColorido.svg'
import add from './add.svg'
import addColorido from './addColorido.svg'
import prancheta from './prancheta.svg'
import pranchetaColorido from './pranchetaColorido.svg'


export const dadosFalsosUsuario = {
    "_id": "6878432984ceft9fjda4235",
    "nome": "UrsoPolar",
    "email": "luizfeliphe@gmail.com",
    "papel": "proprietario",
    "image": usuario,
}

export const dadosFalsosProprietarioLinks = [
    {nome: "Dashboard", caminho:"/proprietario", icone: dashboard, iconeColorido: dashboardColorido},
    {nome: "Adicionar Carro", caminho:"/proprietario/adicionar-carro", icone: add, iconeColorido: addColorido},
    {nome: "Gerenciar Carros", caminho:"/proprietario/gerenciar-carros", icone: carPainel, iconeColorido: carPainelColorido},
    {nome: "Gerenciar Reservas", caminho:"/proprietario/gerenciar-reservas", icone: prancheta, iconeColorido: pranchetaColorido},
]



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
        image: bmw,
        descricao: "Um sedan confiável e econômico, perfeito para viagens urbanas e longas. Muito bom para famílias.Um sedan confiável e econômico, perfeito para viagens urbanas e longas. Muito bom para famílias.Um sedan confiável e econômico, perfeito para viagens urbanas e longas. Muito bom para famílias.Um sedan confiável e econômico, perfeito para viagens urbanas e longas. Muito bom para famílias.Um sedan confiável e econômico, perfeito para viagens urbanas e longas. Muito bom para famílias.",
    },
    {
        _id: 2,
        marca: "Opala",
        modelo: "Civic",
        ano: 2019,
        isDisponivel: false,
        precoPorDia: 140,
        categoria: "Opala",
        capacidadeAssento: 5,
        tipoCombustivel: "Flex",
        trasmissao: "Manual",
        localizacao: "Rio de Janeiro",
        image: opala2,
        descricao: "O Honda Civic é conhecido por sua confiabilidade e desempenho sólido. Com um design elegante e moderno, este sedan oferece uma experiência de condução confortável e eficiente. Equipado com tecnologia avançada, o Civic proporciona conectividade e segurança para todos os passageiros. Seja para deslocamentos diários ou viagens mais longas, o Honda Civic é uma escolha inteligente para quem busca qualidade e estilo em um veículo.",
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
        image: ferrari,
        descricao: "O Ford Focus é um hatchback versátil e ágil, ideal para quem busca praticidade e desempenho. Com um design moderno e aerodinâmico, o Focus oferece uma condução dinâmica e confortável. Equipado com tecnologia de ponta, este veículo proporciona conectividade e segurança para todos os ocupantes. Seja para o uso diário na cidade ou para viagens mais longas, o Ford Focus é uma escolha inteligente para quem valoriza estilo e funcionalidade em um carro compacto.",
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
        descricao: "O Chevrolet Cruze é um sedan elegante e moderno, projetado para oferecer conforto e desempenho excepcionais. Com um design sofisticado e linhas aerodinâmicas, o Cruze proporciona uma experiência de condução suave e eficiente. Equipado com tecnologia avançada, este veículo oferece conectividade e segurança para todos os passageiros. Seja para deslocamentos diários ou viagens mais longas, o Chevrolet Cruze é a escolha perfeita para quem busca estilo, conforto e confiabilidade em um carro.",
    },
    {
        _id: 5,
        marca: "Nissan",
        modelo: "Sentra",
        ano: 2017,
        isDisponivel: false,
        precoPorDia: 120,
        categoria: "Sedan",
        capacidadeAssento: 5,
        tipoCombustivel: "Flex",
        trasmissao: "Manual",
        localizacao: "Salvador",
        image: carroGoogl,
        descricao: "O Nissan Sentra é um sedan compacto e eficiente, ideal para quem busca praticidade e conforto no dia a dia. Com um design moderno e aerodinâmico, o Sentra oferece uma condução suave e agradável. Equipado com tecnologia avançada, este veículo proporciona conectividade e segurança para todos os ocupantes. Seja para deslocamentos urbanos ou viagens mais longas, o Nissan Sentra é uma escolha inteligente para quem valoriza estilo, economia e funcionalidade em um carro.",
    }
]

export const dadosFalsosReservas = [
    {
        "_id": "6774539403092x3d03",
        "carro": dadosFalsosCarro[0],
        "usuario": "678099302eccedf894",
        "dataRemocao": "2025-06-13T00:00:00.000Z",
        "dataRetorno": "2025-06-14T00:00:00.00Z",
        "status": "confirmado",
        "preco": 400,
        "createdAt": "2025-06-10T12:57:48.244Z"
    },
    {
        "_id": "6774539403092x3d03",
        "carro": dadosFalsosCarro[1],
        "usuario": "678099302eccedf894",
        "dataRemocao": "2025-06-13T00:00:00.000Z",
        "dataRetorno": "2025-06-14T00:00:00.00Z",
        "status": "confirmado",
        "preco": 400,
        "createdAt": "2025-06-10T12:57:48.244Z"
    },
    {
        "_id": "6774539403092x3d03",
        "carro": dadosFalsosCarro[2],
        "usuario": "678099302eccedf894",
        "dataRemocao": "2025-06-13T00:00:00.000Z",
        "dataRetorno": "2025-06-14T00:00:00.00Z",
        "status": "pendente",
        "preco": 400,
        "createdAt": "2025-06-10T12:57:48.244Z"
    }
]

export const painelDados = {
    totalCarros: 8,
    totalReservas: 15,
    pendingReservas: 5,
    completoReservas: 10,
    recenteReservas: [{
      carro: {marca: "BMW", modelo: "T405" },
      modelo: "405r8",
      preco: "3452",
      status: "Confirmado",
      createdAt: "2025-06-10T12:57:48.244Z"
    },{
      carro:  {marca: "BMW", modelo: "T405R8" },
      modelo: "405r8",
      preco: "3452",
      status: "Confirmado",
      createdAt: "2025-06-10T12:57:48.244Z"
    }],
    mensalLucro: 4578,
}

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
    CarroPagina: OpaELamborghini,
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
    lapis: lapis,
    quadrado: quadrado,
    filtro: filtro,
    opala2: opala2,
    calendario: calendario,
    tempoAzul: tempoAzul,
    tempoLaranja: tempoLaranja,
    localRemocao: localRemocao,
}