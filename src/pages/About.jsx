import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutText from "../components/AboutText/AboutText";
export default function About (){
    return (
        <>
        <Header />
        <Banner title="Sobre" image="about.jpg"/>
        <div className="container">
            <AboutText />
        </div>
        <Footer />
        </>
    )
}