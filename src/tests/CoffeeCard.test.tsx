import { render, screen, fireEvent } from '@testing-library/react'
import CoffeeCard from '../components/CoffeeCard/CoffeeCard'
import { Coffee } from '../types/Coffee'

const mockCoffee: Coffee = {
  id: 1,
  title: 'Café Teste',
  description: 'Descrição teste',
  ingredients: ['café'],
  image: 'https://via.placeholder.com/150',
  price: 2,
  totalSales: 0,
  type: 'hot'
}

describe('CoffeeCard', () => {
  it('deve renderizar as informações do café corretamente', () => {
    render(<CoffeeCard coffee={mockCoffee} onDelete={() => {}} dollarRate={5} />)
    expect(screen.getByText('Café Teste')).toBeInTheDocument()
    expect(screen.getByText('Quente')).toBeInTheDocument()
    expect(screen.getByText('R$10.00')).toBeInTheDocument()
  })

  it('deve chamar onDelete ao clicar no botão de excluir', () => {
    const mock = vi.fn()
    render(<CoffeeCard coffee={mockCoffee} onDelete={mock} dollarRate={5} />)

    fireEvent.click(screen.getByText('×'))
    expect(mock).toHaveBeenCalled()
  })
})
