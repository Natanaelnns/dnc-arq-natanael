import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import { AppContext } from "../components/Context/AppContext";
import { useContext } from "react";

export default function Contact (){

    const appContext = useContext(AppContext);

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg"/>
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}