import 'styled-components';
import { Theme } from 'src/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

/* eslint import/prefer-default-export:0, @typescript-eslint/no-empty-interface:0 */
