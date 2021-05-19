import React from 'react';
import { render } from '@testing-library/react';
import MushShowPage from './MushShowPage';

test('renders the mushroom name', () => {
    render(<MushShowPage />);
});