import React from 'react';
import Link from 'next/link';
import Form from './Form'

const FormPage = () => {
    return (
        <React.Fragment>
            <h1 className="text-xl text-center font-bold mt-6">
                Críticas e sugestões
            </h1>

            <p className="font-bold my-8 text-center text-sm mb-4">
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <Form />

        </React.Fragment>

    )
}

export default FormPage;