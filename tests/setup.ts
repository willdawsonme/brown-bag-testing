// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', error => {
    console.log(error);
});

window.open = jest.fn();

Object.defineProperty(window, 'location', {
    value: {
        ...window.location,
    },
    writable: true,
});
