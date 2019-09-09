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

test('renders the title', () => {
    const props = getProps();
    const { getByText } = render(<HoroscopeModule {...props} />);
    getByText('Horoscope');
});

test('renders the default sign', () => {
    const props = getProps();
    const { getByText, getByRole } = render(<HoroscopeModule {...props} />);

    getByText('Aries');
    getByText(horoscopeSigns[0].description);

    const image = getByRole('img') as HTMLImageElement;
    expect(image.src).toBe('https://nine.com.au/static/assets/images/aries-daily-horoscope.png');
});

test('renders the sign from local storage', () => {
    window.localStorage.setItem('selected-horoscope', '"Aquarius"');

    const props = getProps();
    const { getByText } = render(<HoroscopeModule {...props} />);

    getByText('Aquarius');
    getByText(horoscopeSigns[10].description);

    window.localStorage.removeItem('selected-horoscope');
});

test('selects a new sign to view', () => {
    const props = getProps();
    const { getByText, queryByText } = render(<HoroscopeModule {...props} />);

    getByText('Aries');
    expect(queryByText('Pisces')).toBeNull();

    fireEvent.click(getByText('Set star sign'));
    fireEvent.click(getByText('Pisces'));

    expect(queryByText('Aries')).toBeNull();

    getByText('Pisces');
    getByText(horoscopeSigns[11].description);

    expect(window.localStorage.getItem('selected-horoscope')).toBe('"Pisces"');
});

test('opens the read more page', () => {
    const props = getProps();
    const { getByText } = render(<HoroscopeModule {...props} />);

    fireEvent.click(getByText('Read more'));
    expect(window.location.href).toBe('http://read-more-horoscopes.com');
});
