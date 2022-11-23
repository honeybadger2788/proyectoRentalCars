/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import Description from './Description';
import styles from './Description.module.css'



test('renders a p tag', () => {
    render(<Description />);
    expect(<h2>descriptionTitle</h2>).toMatch('Qué ofrece este lugar?');
    }
);