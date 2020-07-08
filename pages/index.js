import React from 'react'
import HomeContent from '../components/HomeContent'
import PageTitle from '../components/PageTitle'

const Index = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Restaurante PanelaQuente'} />
            <div className="py-4">
                <HomeContent />
            </div>
        </React.Fragment>
    )
}

export default Index