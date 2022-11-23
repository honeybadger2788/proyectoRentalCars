/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import Description from './Description';

test('renders a p tag', () => {
    render(<Characteristics />);
    expect('Qué ofrece este lugar?').toMatch('Qué ofrece este lugar?');
    }
);