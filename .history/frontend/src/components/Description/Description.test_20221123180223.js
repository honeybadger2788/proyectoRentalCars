/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import Description from './Description';

test('renders a p tag', () => {
    render(<Description />);
    expect(descriptionTitle).toMatch('Qué ofrece este lugar?');
    }
);