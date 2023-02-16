import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/SA_Logo.png";
import { SlMenu } from "react-icons/sl";
import { Button } from '@mui/material';

const NavBar = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }
    const goToContact = () => {
        navigate("/contact");
    }
    const goToAbout = () => {
        navigate("/about");
    }
    const goToProject = () => {
        navigate("/project");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white sticky-top border-bottom">
            <div className="container">
                <Link className="navbar-brand text-primary navBrand" to="/"><img src={logo} alt="logo" /> SayanDip</Link>
                <button className="navbar-toggler border-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <SlMenu className='text-danger' />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Button color='error' className='navlink' onClick={goToHome}>Home</Button>
                            <Button color='error' className='navlink' onClick={goToProject}>Projects</Button>
                            <Button color='error' className='navlink' onClick={goToAbout}>About</Button>
                            <Button color='error' className='navlink' onClick={goToContact}>Contact</Button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;