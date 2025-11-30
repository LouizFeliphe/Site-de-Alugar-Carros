import BannerSite from "../components/Banner";
import Hero from "../components/Hero";
import EmailInscricao from "../components/Newsletter";
import RodapeSite from "../components/rodape";
import SecaoMostrada from "../components/secaoApresentada";
import TestemunhosComponente from "../components/Testemunhos";


const Home = ()=>{

    return(
        <>
           <Hero/>
           <SecaoMostrada/>
           <BannerSite/>
           <TestemunhosComponente/>
           <EmailInscricao/>
        </>
    )
}

export default Home;