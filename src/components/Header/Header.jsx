import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../../assets/dnc-logo.svg"
export default function Header(){
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}/></Link>
                    <nav>
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