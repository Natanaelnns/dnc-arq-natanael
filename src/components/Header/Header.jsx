import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../../assets/dnc-logo.svg"
import { useState } from "react";
//Componentes
import Button from '../Button/Button'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu(){
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}/></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button  buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li><Link to="/projects">Projetos</Link></li>
                            <li><Link to="/contact">Contato</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}