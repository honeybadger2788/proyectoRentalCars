import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a p tag', () => {
    render(<App />);
    expect(screen.getByText(/Seniti como en tu hogar/)).toBeInTheDocument;
})