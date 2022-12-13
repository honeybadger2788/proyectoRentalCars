import { render, screen } from '@testing-library/react'
import Reservation from './Reservation';
test('renders a p tag', () => {
    render(<Reservation />);
    const subTitulo = screen.getByText('¡Muchas gracias!')
    expect('¡Muchas gracias!').toMatch();
    }
);