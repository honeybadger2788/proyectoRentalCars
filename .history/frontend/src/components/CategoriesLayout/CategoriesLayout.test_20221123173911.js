/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import CategoriesLayout from './CategoriesLayout';

test('renders a p tag', () => {
    render(<CategoriesLayout />);
    screen.getAllByText(2)
    expect('Buscar por tipo de vehículo').toMatch('Buscar por tipo de vehículo');
    }
);