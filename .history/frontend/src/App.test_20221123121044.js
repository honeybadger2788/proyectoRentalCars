import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

test('renders a p tag', () => {
    render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);
    const pTagElement = screen.getByText('Sentite como en tu hogar);
    expect(pTagElement).toBeInTheDocument();
});