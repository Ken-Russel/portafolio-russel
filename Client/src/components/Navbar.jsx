import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/sobre-mi'>Sobre mí</Link>
                </li>
                <li>
                    <Link to='/proyectos'>Proyectos</Link>
                </li>
                <li>
                    <Link to='/contacto'>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
