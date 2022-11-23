import { render, screen } from '@testing-library/react'
import Reservation from './Reservation';
test('renders a p tag', () => {
    render(<Reservation />);
    const subTitulo = screen.get()
    expect('¡Muchas gracias!').toMatch();
    }
);