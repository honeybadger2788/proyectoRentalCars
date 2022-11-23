import { render, screen } from '@testing-library/react'
import Reservation from './Reservation';
test('renders th H', () => {
    render(<Reservation />);
    const subTitulo = screen.getByText('¡Muchas gracias!')
    expect(subTitulo).toBeInTheDocument();
    }
);