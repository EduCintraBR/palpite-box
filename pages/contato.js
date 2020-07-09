import React from 'react';
import { FaLinkedin, FaGithub, FaLaptop } from 'react-icons/fa'


const Contato = () => {
    return (
        <div className="py-16 mx-4">
            <h1 className="text-center text-3xl lg:text-4xl text-green-800">Olá, eu sou o Eduardo Cintra</h1>
            <p className="text-md text-center">Gostaria de me conhecer mais? Entre em contato comigo!</p>
            <div className="group-contact pt-8">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/educintrabr/">
                            <FaLinkedin size={64} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EduCintraBR">
                            <FaGithub size={64} />
                        </a>
                    </li>
                    <li>
                        <a href="https://eduardocintra.dev">
                            <FaLaptop size={64} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contato