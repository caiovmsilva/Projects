import Link from "next/link";
import NavItem, { NavItemInterface} from "../NavItem";
import "./index.css"    

export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/projects",
            label: "Projetos"
        },
        {
            url: "/contact",
            label: "Contato"
        }
    ]

    return (
        <header>
            <nav className="navbar">
                <ul className="nav-items">
                    {items.map((item, index)=> (
                        <NavItem
                            key = {index}
                            url  = {item.url}
                            label = {item.label}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}