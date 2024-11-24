import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact (){
    return (
        <>
        <Header />
        <Banner title="Contatos" image="contact.jpg"/>
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}