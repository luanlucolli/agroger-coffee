// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import FilterBar from '../components/FilterBar/FilterBar'
import CoffeeCard from '../components/CoffeeCard/CoffeeCard'
import { Coffee } from '../types/Coffee'
import { getAllCoffees } from '../services/api'
import { getDollarRate } from '../services/currency'
import coffeeIcon from '../assets/coffee-beans.png'
import styles from './HomePage.module.css'
import { showToast } from '../components/Toast/Toast'
import Placeholder from '../components/Placeholder/Placeholder'

const STORAGE_KEY = 'selectedCoffees'

const HomePage: React.FC = () => {
    const [currentCoffees, setCurrentCoffees] = useState<Coffee[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    })

    const [allCoffees, setAllCoffees] = useState<Coffee[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filterType, setFilterType] = useState<'all' | 'hot' | 'iced'>('all')
    const [dollarRate, setDollarRate] = useState(5.0) // valor padrão em caso de erro

    const hotCount = currentCoffees.filter(c => c.type === 'hot').length
    const icedCount = currentCoffees.filter(c => c.type === 'iced').length

    // Busca todos os cafés da API
    useEffect(() => {
        (async () => {
            try {
                const coffees = await getAllCoffees()
                setAllCoffees(coffees)
            } catch (error) {
                console.error('Erro ao buscar cafés:', error)
                showToast('Erro ao carregar cafés. Tente novamente mais tarde.', 'error')
            }
        })()
    }, [])

    // Busca a cotação do dólar atual
    useEffect(() => {
        (async () => {
            try {
                const rate = await getDollarRate()
                setDollarRate(rate)
            } catch (error) {
                console.error('Erro ao buscar cotação do dólar:', error)
                showToast('Erro ao obter cotação do dólar. Usando valor padrão.', 'info')
            }
        })()
    }, [])

    // Sincroniza localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentCoffees))
    }, [currentCoffees])

    // Adiciona novo café
    const handleAddRandomCoffee = () => {
        try {
            const existingIds = currentCoffees.map(c => c.id)
            const available = allCoffees.filter(c => !existingIds.includes(c.id))

            if (available.length === 0) {
                showToast('Você já adicionou todos os cafés disponíveis!', 'info')
                return
            }

            const randomIndex = Math.floor(Math.random() * available.length)
            const selectedCoffee = available[randomIndex]

            setCurrentCoffees(prev => [...prev, selectedCoffee])
        } catch (error) {
            console.error('Erro ao adicionar café:', error)
            showToast('Erro ao adicionar um novo café.', 'error')
        }
    }

    const handleDeleteCoffee = (id: number) => {
        setCurrentCoffees(prev => prev.filter(c => c.id !== id))
        showToast('Café removido com sucesso!', 'success') 
    }



    const filteredCoffees = currentCoffees.filter(cafe => {
        if (filterType !== 'all' && cafe.type !== filterType) return false
        if (!cafe.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
        return true
    })

    return (
        <div className="container py-4" style={{ maxWidth: '72rem' }}>
            <h1 className="text-center mb-4 fw-semibold" style={{ color: '#6c3d21' }}>
                Agroger Coffee
            </h1>

            {/* Barra de pesquisa + Botão para adicionar novo café */}
            <div className="row g-2 mb-3">
                <div className="col-12 col-md-8">
                    <SearchBar
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder="Pesquisar café..."
                    />
                </div>
                <div className="col-12 col-md-4">
                    <button
                        className={`${styles.newCoffeeBtn} w-100`}
                        onClick={handleAddRandomCoffee}
                    >
                        <img
                            src={coffeeIcon}
                            alt="Coffee icon"
                            className={styles.coffeeIcon}
                        />
                        Novo Café
                    </button>
                </div>
            </div>

            {/* Filtros */}
            <FilterBar
                filterType={filterType}
                onFilterChange={setFilterType}
                counts={{
                    hot: hotCount,
                    iced: icedCount,
                    all: currentCoffees.length
                }}
            />

            {/* Lista de cafés */}
            <div className="mt-3">
                {filteredCoffees.length > 0 ? (
                    filteredCoffees.map(coffee => (
                        <CoffeeCard
                            key={coffee.id}
                            coffee={coffee}
                            dollarRate={dollarRate}
                            onDelete={() => handleDeleteCoffee(coffee.id)}
                        />
                    ))
                ) : (
                    <Placeholder message="Nenhum café encontrado nessa categoria." />
                )}
            </div>
        </div>
    )
}

export default HomePage
