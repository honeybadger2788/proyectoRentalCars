import { render, screen } from '@testing-library/react'
import Chara

test('renders a p tag', () => {
    render(<Characteristics />);
    expect('Qué ofrece este lugar?').toMatch('Qué ofrece este lugar?');
    }
);