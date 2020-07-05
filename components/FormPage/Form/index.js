import React from 'react';
import styles from './styles.module.css'

const Form = () => {
    return (
        <form>
            <div className={styles.formGroup}>
                <label className={styles.label}>Seu nome: </label>
                <input type="text" name="nome"/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>E-mail: </label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Whatsapp: </label>
                <input type="text" name="whatsapp"/>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Sua crítica ou sugestão: </label>
                <textarea name="critica" cols="30" rows="5">
                </textarea>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.label}>Que nota você daria para o estabelecimento: </label>
                <div className={styles.inputGroup}>
                    <input type="radio" name="nota" /> 1
                    <input type="radio" name="nota" /> 2
                    <input type="radio" name="nota" /> 3
                    <input type="radio" name="nota" /> 4
                    <input type="radio" name="nota" /> 5
                </div>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.label}>Você indicaria para um amigo?</label>
                <div className={styles.inputGroup}>
                    <input type="radio" name="indicacao" /> Sim
                    <input type="radio" name="indicacao" /> Não
                </div>
            </div>
        </form>
    )
}

export default Form