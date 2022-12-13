import { render, screen } from '@testing-library/react'
import Calendar from './Calendar'

test('renders a p tag', () => {
    render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);
    expect('Sentite como en tu hogar').toMatch('Sentite como en tu hogar');
    }
);