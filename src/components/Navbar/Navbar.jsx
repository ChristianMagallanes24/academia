import React, {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> guerreros </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> inicio</a>
                <a href="#"> sobre nosotros</a>
                <a href="#"> clases</a>
                <a href="#"> precios</a>
                <a href="#"> contacto</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar