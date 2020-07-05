import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-footer py-4 text-center">
            <span className="text-white font-bold">Projeto desenvolvido por Eduardo Cintra</span>
            <div className="group-contact">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/educintrabr/">
                            <FaLinkedin size={32} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EduCintraBR">
                            <FaGithub size={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer