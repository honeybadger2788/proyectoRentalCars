import { render, screen } from '@testing-library/react'
import Reservation from './Reservation';
test('renders the h2', () => {
    render(<Reservation />);
    const subTitulo = screen.getByText('¡Muchas gracias!')
    expect(subTitulo).toBeInTheDocument();
    }
);