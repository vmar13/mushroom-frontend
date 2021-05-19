import React from 'react';
import { render, screen } from '@testing-library/react';
import MushShowPage from './MushShowPage';

test('renders the label scientific name', () => {
    //Arrange
    render(<MushShowPage />);
    
    //Act
    //...nothing

    //Assert
    const sciName = screen.getByText(/Scientific Name/i);
    expect(sciName).toBeInTheDocument();
});

test('renders the label tea flavor', () => {
    render(<MushShowPage />);

    const teaFlavor = screen.getByText(/Tea flavor/, { exact: true });
    expect(teaFlavor).toBeInTheDocument();
});