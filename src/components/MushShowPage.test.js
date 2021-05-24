import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MushShowPage from './MushShowPage';

//Use describe function to group all unit tests belonging to 
//one feature or component into a testing suite
describe('renders mushroom info card', () => {
    test('renders the scientific name label', () => {
        //Arrange
        render(<MushShowPage />);
        //Act
        //...nothing
        //Assert
        const sciName = screen.getByText(/Scientific Name/i);  //REGEX for case-insensitive
        expect(sciName).toBeInTheDocument();
    });

    test('renders the location label', () => {
        render(<MushShowPage />);
        const location = screen.getByText(/Location/i);
        expect(location).toBeInTheDocument();
    })
    
    test('renders the tea flavor label', () => {
        render(<MushShowPage />);
        const teaFlavor = screen.getByText(/Tea flavor/, { exact: true }); //Text must be exact match
        expect(teaFlavor).toBeInTheDocument();
    });
})

// test('renders plus sign if NOT clicked', () => {
//     render(<MushShowPage />);
//     const plusBtn = screen.getByText('+');
//     expect(plusBtn).toBeInTheDocument();
// })

test('source button has correct initial text', () => {
    render(<MushShowPage />);
    const plusBtn = screen.getByRole('button', { name: '+'})
    expect(plusBtn).toBeInTheDocument();
});

test('source button turns to minus sign when clicked', () => {
    render(<MushShowPage />);
    const plusBtn = screen.getByRole('button', { name: '+'});
    fireEvent.click(plusBtn);
    expect(plusBtn.textContent).toBe('–');
});

// test('renders minus sign if clicked', () => {
//     //Arrange
//     render(<MushShowPage />);
//     //Act
//     const plusBtn = screen.getByText('+');
//     userEvent.click(plusBtn)
//     //Assert
//     const minusBtn = screen.getByText('-');
//     expect(minusBtn).toBeInTheDocument();
// })
