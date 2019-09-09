import React from 'react';
import { render, fireEvent } from 'test-utils';
import HoroscopeModule from './HoroscopeModule';
import { horoscopeSigns } from './index';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getProps = () => {
    return {
        title: 'Horoscope',
        signs: horoscopeSigns,
        readMoreLink: 'http://read-more-horoscopes.com',
    };
};

test('renders the title', () => {});

test('renders the default sign', () => {});

test('renders the sign from local storage', () => {});

test('selects a new sign to view', () => {});

test('opens the read more page', () => {});
