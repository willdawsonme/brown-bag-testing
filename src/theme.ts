enum TextSize {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXL = 'xxl',
    XXXL = 'xxxl',
}

enum TextLineHeight {
    Default = 'default',
    Tight = 'tight',
}

enum TextWeight {
    Default = 'default',
    Bold = 'bold',
}

const palette = {
    black: '#000000',
    white: '#FFFFFF',
    grey100: '#F5F5F5',
    grey200: '#E5E5E5',
    grey300: '#D6D6D6',
    grey400: '#ABABAB',
    grey500: '#737373',
    grey600: '#333333',
    grey700: '#222222',
    grey800: '#111111',
    purple: '#8249ff',
};

const theme = {
    color: {
        ...palette,
        brand: palette.purple,
        textDefault: palette.grey600,
        textSecondary: palette.grey500,
        bgDefault: palette.white,
        border: palette.grey200,
    },
    text: {
        size: {
            xs: 12,
            s: 14,
            m: 16,
            l: 18,
            xl: 21,
            xxl: 24,
            xxxl: 36,
        },
        lineHeight: {
            default: 1.4,
            tight: 1.25,
        },
        weight: {
            default: 400,
            bold: 700,
        },
        preset: {
            tiny: {
                size: TextSize.XS,
                lineHeight: TextLineHeight.Default,
                weight: TextWeight.Default,
            },
            small: {
                size: TextSize.S,
                lineHeight: TextLineHeight.Default,
                weight: TextWeight.Default,
            },
            body: {
                size: TextSize.M,
                lineHeight: TextLineHeight.Default,
                weight: TextWeight.Default,
            },
            bodyLarge: {
                size: TextSize.L,
                lineHeight: TextLineHeight.Default,
                weight: TextWeight.Default,
            },
            headingOne: {
                size: TextSize.XXXL,
                lineHeight: TextLineHeight.Tight,
                weight: TextWeight.Bold,
            },
            headingTwo: {
                size: TextSize.XXL,
                lineHeight: TextLineHeight.Tight,
                weight: TextWeight.Bold,
            },
            headingThree: {
                size: TextSize.XL,
                lineHeight: TextLineHeight.Tight,
                weight: TextWeight.Bold,
            },
        },
    },
};

export type Theme = typeof theme;

export default theme;
