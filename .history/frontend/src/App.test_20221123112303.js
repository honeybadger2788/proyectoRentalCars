import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a p tag', () => {
    render(<App />);
    expect(screen.getByText(/Sentite como en tu hogar/i)).toBeInTheDocument;
})