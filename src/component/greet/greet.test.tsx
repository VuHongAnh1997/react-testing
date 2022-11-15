import { Greet } from './greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet name="HA" />);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    });
});

test('Greet render Guest', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Guest/);
    expect(textElement).toBeInTheDocument();
});

// describe('Nested', () => {
//     test('Greet renders with a name', () => {
//         render(<Greet name='Vishwas' />)
//         const textElement = screen.getByText('Hello Vishwas')
//         expect(textElement).toBeInTheDocument()
//     })
// })

// test.only('Greet renders with a name', () => {
//     render(<Greet name='Vishwas' />)
//     const textElement = screen.getByText('Hello Vishwas')
//     expect(textElement).toBeInTheDocument()
// })
// test.skip similiar to test.only
// describe to group test, also using describe only or describe skip
