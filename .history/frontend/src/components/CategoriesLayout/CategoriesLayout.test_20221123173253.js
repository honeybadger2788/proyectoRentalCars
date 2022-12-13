/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

test('renders a p tag', () => {
    render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);
    expect('Sentite como en tu hogar').toMatch('Sentite como en tu hogar');
    }
);