import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ProjectsList from "../components/ProjectsList/ProjectsList";

export default function Projects (){
    return (
        <>
        <Header />
        <Banner title="Projetos" image="projects.jpg"/>
        <div className="container">
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}