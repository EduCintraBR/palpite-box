import React from 'react';
import Form from './Form'

const FormPage = () => {
    return (
        <React.Fragment>
            <h1 className="text-xl text-center font-bold mt-6">
                Críticas e sugestões
            </h1>

            <p className="font-bold mt-8 text-center text-sm mb-4">
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <Form />

            <button className="
                px-20 
                py-4 
                mt-10 
                font-bold 
                bg-blue 
                rounded-lg 
                btn-opacity
                mx-auto
                block">
                Enviar crítica ou sugestão
            </button>

            <p className="font-bold my-8 text-center text-sm">
                Ao dar sua opinião e/ou sugestão, <br/> ganhe 10% na sua próxima compra.
            </p>

        </React.Fragment>

    )
}

export default FormPage;