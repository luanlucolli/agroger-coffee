import React from 'react'
import styles from './FilterBar.module.css'

interface FilterBarProps {
  filterType: 'all' | 'hot' | 'iced'
  onFilterChange: (type: 'all' | 'hot' | 'iced') => void
  counts?: {
    hot: number
    iced: number
    all: number
  }
}

const FilterBar: React.FC<FilterBarProps> = ({
  filterType,
  onFilterChange,
  counts
}) => {
  return (
    <div className={styles.filterBar}>
      <button
        className={
          filterType === 'all'
            ? `${styles.filterButton} ${styles.filterButtonActive}`
            : styles.filterButton
        }
        onClick={() => onFilterChange('all')}
      >
        {`Todos (${counts?.all ?? 0})`}
      </button>

      <button
        className={
          filterType === 'hot'
            ? `${styles.filterButton} ${styles.filterButtonActive}`
            : styles.filterButton
        }
        onClick={() => onFilterChange('hot')}
      >
        {`Quentes (${counts?.hot ?? 0})`}
      </button>

      <button
        className={
          filterType === 'iced'
            ? `${styles.filterButton} ${styles.filterButtonActive}`
            : styles.filterButton
        }
        onClick={() => onFilterChange('iced')}
      >
        {`Frios (${counts?.iced ?? 0})`}
      </button>
    </div>
  )
}

export default FilterBar
