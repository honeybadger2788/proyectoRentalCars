/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import CategoriesLayout from './CategoriesLayout';

test('renders a p tag', () => {
    render(<CategoriesLayout />);
    expect('Qué ofrece este lugar?').toMatch('Qué ofrece este lugar?');
    }
);