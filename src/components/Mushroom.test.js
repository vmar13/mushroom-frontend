import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Mushroom from './Mushroom';
import { MemoryRouter } from 'react-router';

test('teacup GIF pops up on hover', () => {
    render(<MemoryRouter><Mushroom /></MemoryRouter>);
    //popup starts out hidden
    const nullPopUp = screen.getByAltText('white-mug');
    expect(nullPopUp).not.toBeInTheDocument();

    //popup appears on hover
    const mushImage = screen.getByAltText('mush-img');
    userEvent.hover(mushImage);
    const popUp = screen.getByAltText('white-mug');
    expect(popUp).toBeInTheDocument();
})