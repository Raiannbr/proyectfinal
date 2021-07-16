import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='./'>
                        <img src='http://2.bp.blogspot.com/-nxhhMMpL6vk/VSp-OJPAtUI/AAAAAAAAG0o/OeEqL8IK7J0/s1600/how-to-draw-the-rebel-alliance-starbird-from-star-wars-starbird-symbol_1_000000015781_5.gif' width='70'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-auto">
                                <Link className="nav-link " to='./inicio'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='./Alianza'>Alianza</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='./Productos'>Productos</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )


}

export default NavBar