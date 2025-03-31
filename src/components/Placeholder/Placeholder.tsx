// src/components/Placeholder/Placeholder.tsx
import React from 'react'
import styles from './Placeholder.module.css'
import emptyIcon from '../../assets/placeholderIcon.png'

interface PlaceholderProps {
    message: string
}

const Placeholder: React.FC<PlaceholderProps> = ({ message }) => {
    return (
        <div className={styles.placeholder}>
            <img src={emptyIcon} alt="Nada encontrado" className={styles.icon} />
            <p className={styles.text}>{message}</p>
        </div>
    )
}

export default Placeholder
