import React, { useState } from 'react';
import Form from './Form'
import Cupom from '../Coupon'

const FormPage = () => {
    var [ success, setSuccess ] = useState(false)
    var [ retorno, setRetorno ] = useState({})
    return (
        <React.Fragment>
            {!success &&
                <> 
                    <h1 className="text-xl text-center font-bold mt-6">
                        Críticas e sugestões
                    </h1>

                    <p className="font-bold my-8 text-center text-sm mb-4">
                        O restaurante X sempre busca por atender melhor seus clientes. <br/>
                        Por isso, estamos sempre abertos a ouvir a sua opinião.
                    </p>
                </>
            }

            {!success && <Form setSuccess={setSuccess} setRetorno={setRetorno}/> }

            { success && 
                <div className="mx-auto">
                    <p className="w-1/5 mx-auto bg-blue-100 border-t border-b border-green-500 text-green-700 px-4 py-4 mt-4 mb-8 text-center">
                        Obrigado por contribuir com sua sugestão e crítica!
                    </p>

                    { 
                        retorno.showCoupon && 
                        <div className="mb-8">
                            <strong className="text-center block text-2xl my-4">Parabéns, aqui está seu CUPOM</strong>
                            <span className="text-2xl text-center block">
                                <Cupom idCoupon={retorno.Cupom} />
                            </span>
                        </div>
                    }

                </div>
            }

        </React.Fragment>

    )
}

export default FormPage;