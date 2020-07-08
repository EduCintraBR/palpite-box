import React from 'react';
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title={'Sobre'} />
            <h1 className="text-center text-4xl mt-8">Restaurante PanelaQuente</h1>
            <div className="gridSobre">
                <div className="infoSobre">
                    <p>Venha conhecer nosso restaurante!<br/> 
                    Um restaurante moderno, aconchegante e com o melhor
                    da comida brasileira e italiana, venha nos conhecer.</p>
                    <p>Rua Fulano de tal, 150, Centro <br/>
                    São Paulo - SP</p>
                </div>
                <picture className="imgSobre">
                    <img src="./restaurant.jpg" alt="Restaurante PanelaQuente"/>
                </picture>
            </div>
        </div>
    )
}

export default Sobre