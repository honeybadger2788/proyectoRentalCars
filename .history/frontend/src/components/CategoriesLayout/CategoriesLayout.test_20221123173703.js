/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import CategoriesLayout from './CategoriesLayout';

test('renders a p tag', () => {
    render(<CategoriesLayout />);
    expect('Buscar por tipo de vehículo').toMatch('Buscar por tipo de vehículo');
    }
);