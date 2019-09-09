import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult => {
    const Providers: React.FC<{}> = ({ children }) => {
        return <ThemeProvider theme={theme}>{children as React.ReactChild}</ThemeProvider>;
    };

    return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
