import React from 'react'
import FormPage from '../components/FormPage'
import PageTitle from '../components/PageTitle'

const FormCritica = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Pesquisa de opinião'} />
            <div className="py-4">
                <FormPage />
            </div>
        </React.Fragment>
    )
}

export default FormCritica