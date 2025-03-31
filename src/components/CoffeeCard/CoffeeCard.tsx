// src/components/CoffeeCard/CoffeeCard.tsx
import React, { useState } from 'react'
import styles from './CoffeeCard.module.css'
import { Coffee } from '../../types/Coffee'
import skeletonStyles from './Skeleton.module.css'

interface CoffeeCardProps {
    coffee: Coffee
    onDelete: () => void
    dollarRate: number
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, onDelete, dollarRate }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const typeClass = coffee.type === 'hot' ? styles.quente : styles.frio
    const convertedPrice = coffee.price ? coffee.price * dollarRate : null

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                {!isImageLoaded && (
                    <div
                        className={`${skeletonStyles.skeletonWrapper} ${skeletonStyles.roundedSkeleton}`}
                        style={{ width: '56px', height: '56px' }}
                    >
                        <div className={skeletonStyles.skeletonShimmer} />
                    </div>
                )}

                <img
                    src={coffee.image}
                    alt={coffee.title}
                    className={styles.coffeeImage}
                    style={{ display: isImageLoaded ? 'block' : 'none' }}
                    onLoad={handleImageLoad}
                />
            </div>

            <div className={styles.contentArea}>
                <span className={styles.coffeeTitle}>{coffee.title}</span>
                <span className={`${styles.coffeeType} ${typeClass}`}>
                    {coffee.type === 'hot' ? 'Quente' : 'Frio'}
                </span>
            </div>

            <div className={styles.priceAndButton}>
                <button className={styles.deleteButton} onClick={onDelete}>
                    ×
                </button>
                <span className={styles.price}>
                    {convertedPrice ? `R$${convertedPrice.toFixed(2)}` : 'R$--'}
                </span>
            </div>
        </div>
    )
}

export default CoffeeCard
