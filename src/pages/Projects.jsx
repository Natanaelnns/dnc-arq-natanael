import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import { useContext } from "react";
import { AppContext } from "../components/Context/AppContext";

export default function Projects (){

    const appContext = useContext(AppContext);
    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="projects.jpg"/>
        <div className="container">
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}