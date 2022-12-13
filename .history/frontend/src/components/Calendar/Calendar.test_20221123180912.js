import { render, screen } from '@testing-library/react'
import Characteristics from '../Characteristics/Characteristics';

test('renders a p tag', () => {
    render(<Characteristics />);
    expect('Qué ofrece este lugar?').toMatch('Qué ofrece este lugar?');
    }
);

