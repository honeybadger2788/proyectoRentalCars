/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import Characteristics from './Characteristics';

test('renders a p tag', () => {
    render(<CategoriesLayout />);
    const titulo = screen.getAllByText('Buscar por tipo de vehículo');
    expect(titulo).toMatch('Buscar por tipo de vehículo');
    }
);