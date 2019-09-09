import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, React.Dispatch<string>] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: string): void => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
