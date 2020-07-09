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
                    <h1 className="text-2xl text-center font-bold mt-6">
                        Críticas e sugestões
                    </h1>

                    <p className="font-bold my-8 text-center text-sm mb-4">
                        O restaurante PanelaQuente sempre busca atender e entender melhor seus clientes. <br/>
                        Por isso, estamos desejamos a ouvir a sua opinião.
                    </p>
                </>
            }

            {!success && <Form setSuccess={setSuccess} setRetorno={setRetorno}/> }

            { success && 
                <div className="mx-auto">
                    <p className="w-4/5 lg:w-2/5 mx-auto bg-blue-100 border-t border-b border-green-500 text-green-700 px-4 py-4 mt-4 mb-8 text-center">
                        Obrigado por contribuir com sua sugestão e crítica!
                    </p>

                    { 
                        retorno.showCoupon && 
                        <div className="mb-8">
                            <strong className="text-center block text-xl lg:text-2xl my-4">Parabéns, aqui está seu CUPOM</strong>
                            <span className="text-xl lg:text-2xl text-center block">
                                <Cupom idCoupon={retorno.Cupom} />
                            </span>
                        </div>
                    }

                    { 
                        retorno.showCoupon && 
                        <div className="mb-8">
                            <strong className="text-center block text-lg my-4">
                                {retorno.Promo}
                                <p className="text-center text-sm my-4 italic">
                                    Imprima, tire um print ou uma foto desta tela, <br/> 
                                    e apresente na entrada do nosso restaurante.
                                </p>
                            </strong>
                        </div>
                    }

                </div>
            }

        </React.Fragment>

    )
}

export default FormPage;