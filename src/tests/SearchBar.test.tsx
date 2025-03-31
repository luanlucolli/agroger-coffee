import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../components/SearchBar/SearchBar'

describe('SearchBar', () => {
  it('deve exibir o placeholder corretamente', () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="Pesquisar café..." />)
    expect(screen.getByPlaceholderText('Pesquisar café...')).toBeInTheDocument()
  })

  it('deve chamar onChange ao digitar', () => {
    const mock = vi.fn()
    render(<SearchBar value="" onChange={mock} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Latte' } })

    expect(mock).toHaveBeenCalledWith('Latte')
  })
})
