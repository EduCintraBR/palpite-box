import React from 'react';

const HomeContent = () => {
    return (
        <div className="flex flex-col">
            <p className="font-bold mt-24 text-center text-sm">
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <button className="
                px-20 
                py-4 
                mt-10 
                font-bold 
                bg-blue 
                rounded-lg 
                mx-auto
                btn-opacity">
                    <a href="/form-critica">
                        Dar opinião ou sugestão
                    </a>
            </button>

            <p className="font-bold mt-24 text-center text-sm">
                Ao dar sua opinião e/ou sugestão, <br/> ganhe 10% na sua próxima compra.
            </p>

        </div>
    )
}

export default HomeContent