import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { Theme } from 'src/theme';

type TextPresetKey = keyof Theme['text']['preset'];
type TextSizeKey = keyof Theme['text']['size'];
type TextLineHeightKey = keyof Theme['text']['lineHeight'];
type TextWeightKey = keyof Theme['text']['weight'];

interface Props {
    /**
     * Text preset to use.
     * @default 'body'
     */
    preset?: TextPresetKey;

    /** Size to override with. */
    size?: TextSizeKey;

    /** Line height to override with. */
    lineHeight?: TextLineHeightKey;

    /** Weight to override with. */
    weight?: TextWeightKey;

    /** Color of text. */
    color?: keyof Theme['color'];
}

const sizeFn = (p: StyledProps<Props>): number => {
    const { size } = p.theme.text;
    const preset = p.preset ? p.theme.text.preset[p.preset] : p.theme.text.preset.body;
    return size[p.size || preset.size];
};

const weightFn = (p: StyledProps<Props>): number => {
    const { weight } = p.theme.text;
    const preset = p.preset ? p.theme.text.preset[p.preset] : p.theme.text.preset.body;
    return weight[p.weight || preset.weight];
};

const lineHeightFn = (p: StyledProps<Props>): number => {
    const size = sizeFn(p);
    const preset = p.preset ? p.theme.text.preset[p.preset] : p.theme.text.preset.body;
    const lineHeight = p.theme.text.lineHeight[p.lineHeight || preset.lineHeight];
    return Math.round((size * lineHeight) / 4) * 4;
};

const colorFn = (p: StyledProps<Props>): string | undefined => {
    const color = p.theme.color[p.color as keyof Theme['color']];
    return color;
};

const Text: React.FC<Props> = styled.span<Props>`
    display: block;
    margin: 0;
    font-size: ${sizeFn}px;
    font-weight: ${weightFn};
    line-height: ${lineHeightFn}px;
    color: ${colorFn};
`;

export default Text;
