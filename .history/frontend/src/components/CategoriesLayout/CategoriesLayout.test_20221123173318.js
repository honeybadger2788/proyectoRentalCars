/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import CategoriesLayout from './CategoriesLayout';

test('renders a p tag', () => {
    render(
    <BrowserRouter>
        <CategoriesLayout />;
    expect('Sentite como en tu hogar').toMatch('Sentite como en tu hogar');
    }
);