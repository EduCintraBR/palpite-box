import React, { useState } from 'react';
import styles from './styles.module.css'

const Form = ({ setSuccess, setRetorno }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whats, setWhats] = useState('')
    const [critica, setCritica] = useState('')
    const [nota, setNota] = useState(0)
    const [indica, setIndica] = useState(false)

    async function handleFormData (event) {
        event.preventDefault()

        const formData = {
            Nome: nome,
            Email: email,
            Whatsapp: whats,
            Critica: critica,
            Nota: nota,
            Indica: indica
        }

        try {
            const response = await fetch('/api/save', { 
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data) 
        } catch (error) {
            return console.log(error) 
        }
    }

    return (
        <form onSubmit={handleFormData}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Seu nome: </label>
                <input  type="text" 
                        name="nome"
                        required 
                        onChange={e => setNome(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>E-mail: </label>
                <input  type="email"
                        required 
                        name="email"
                        onChange={e => setEmail(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Whatsapp: </label>
                <input  type="text"
                        required 
                        name="whatsapp"
                        onChange={e => setWhats(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Sua crítica ou sugestão: </label>
                <textarea name="critica" cols="30" rows="5" onChange={e => setCritica(e.target.value)}>
                </textarea>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.label}>Que nota você daria para o estabelecimento: </label>
                <div className={styles.inputGroup}>
                    
                    <input  type="radio" name="nota" 
                            value="1" onChange={e => setNota(e.target.value)}/> 1
                    <input  type="radio" name="nota" 
                            value="2" onChange={e => setNota(e.target.value)}/> 2
                    <input  type="radio" name="nota" 
                            value="3" onChange={e => setNota(e.target.value)}/> 3
                    <input  type="radio" name="nota" 
                            value="4" onChange={e => setNota(e.target.value)}/> 4
                    <input  type="radio" name="nota" 
                            value="5" onChange={e => setNota(e.target.value)}/> 5
                </div>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.label}>Você indicaria para um amigo?</label>
                <div className={styles.inputGroup}> 
                    <input  type="radio" name="indicacao" 
                            value={true} onChange={e => setIndica(e.target.value)}/> Sim
                    <input  type="radio" name="indicacao" 
                            value={false} onChange={e => setIndica(e.target.value)}/> Não
                </div>
            </div>

            <button className="
                px-8
                lg:px-20 
                py-4 
                my-10 
                font-bold 
                bg-btn 
                rounded-lg 
                btn-opacity
                mx-auto
                block">
                Enviar crítica ou sugestão
            </button>
        </form>
    )
}

export default Form