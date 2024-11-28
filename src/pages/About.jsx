import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AboutText from "../components/AboutText/AboutText";
import { AppContext } from "../components/Context/AppContext";
import { useContext } from "react";

export default function About (){

    const appContext = useContext(AppContext);

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg"/>
        <div className="container">
            <AboutText />
        </div>
        <Footer />
        </>
    )
}