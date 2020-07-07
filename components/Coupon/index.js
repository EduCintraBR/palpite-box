import React from 'react';
import styles from './styles.module.css'

export default ({ idCoupon }) => {
    return (
        <div class={styles.cupom}>
            <span class={styles.num}>{ idCoupon }</span>
        </div>
    )
}