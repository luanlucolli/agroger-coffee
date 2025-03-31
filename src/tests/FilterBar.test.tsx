import { render, screen, fireEvent } from '@testing-library/react'
import FilterBar from '../components/FilterBar/FilterBar'

describe('FilterBar', () => {
  it('deve exibir os botões de filtro com contagem correta', () => {
    render(
      <FilterBar
        filterType="all"
        onFilterChange={() => {}}
        counts={{ hot: 3, iced: 2, all: 5 }}
      />
    )

    expect(screen.getByText(/Todos \(5\)/)).toBeInTheDocument()
    expect(screen.getByText(/Quentes \(3\)/)).toBeInTheDocument()
    expect(screen.getByText(/Frios \(2\)/)).toBeInTheDocument()
  })

  it('deve chamar onFilterChange ao clicar em um botão', () => {
    const mock = vi.fn()
    render(
      <FilterBar
        filterType="all"
        onFilterChange={mock}
        counts={{ hot: 0, iced: 0, all: 0 }}
      />
    )

    fireEvent.click(screen.getByText(/Quentes/i))
    expect(mock).toHaveBeenCalledWith('hot')
  })
})
