import { render, screen } from '@testing-library/react'
import Reservation from './Reservation';
test('renders a p tag', () => {
    render(<Reservation />);
    expect('Qué ofrece este lugar?').toMatch('Qué ofrece este lugar?');
    }
);