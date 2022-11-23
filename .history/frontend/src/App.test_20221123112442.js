/* eslint-disable no-unused-expressions */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a p tag', () => {
    render(<App />);
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByText(/Sentite como en tu hogar/)).toBeInTheDocument;
})