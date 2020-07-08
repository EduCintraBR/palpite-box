import React from 'react';
import Link from 'next/link';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(response => response.json())

const HomeContent = () => {
    const { data, error } = useSWR('/api/get_promo', fetcher)
    return (
        <div className="flex flex-col">
            <p className="font-bold mt-24 text-center text-sm">
                O restaurante PanelaQuente sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <button className="
                px-20 
                py-4 
                mt-10 
                font-bold 
                bg-btn 
                rounded-lg 
                mx-auto
                btn-opacity">
                    <Link href="/form-critica">
                        <a>Dar opinião ou sugestão</a>
                    </Link>
            </button>

            { !data && <p>Carregando...</p> }
            { data && data.showCoupon &&
                <p className="my-12 text-center text-sm">
                    { data.message }
                </p>            
            }


        </div>
    )
}

export default HomeContent