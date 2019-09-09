declare module '@mdx-js/react' {
    import React from 'react';

    export interface MDXComponents {
        code: React.ComponentType<{ children: string }>;
        [type: string]: React.ComponentType<React.HTMLProps>;
    }

    interface MDXProviderProps {
        components?: MDXComponents;
    }

    const MDXProvider: React.ComponentType<MDXProviderProps>;

    export { MDXProvider };
}
