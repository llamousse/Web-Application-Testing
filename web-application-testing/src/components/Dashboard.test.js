import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    describe('onStrike()', () => {
        it('should add strike when strike is clicked', () => {
            // const hitStrike = render(<Dashboard />);
            // const getResult = hitStrike.getAllByTestId('strike-button');
            // expect(getResult).toHaveAttribute('1');
        });
    });
});