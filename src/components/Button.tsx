import React from 'react';
import Color from 'color';
import styled, { StyledProps } from 'styled-components';
import Icon from 'src/components/Icon';
import { Theme } from 'src/theme';

const colors = {
    purple: '#8249ff',
    brand: '#8249ff',
    bgDefault: '#FFF',
    bgReversed: '#000',
};

interface Props {
    type?: 'primary' | 'secondary' | 'tertiary';
    color?: keyof Theme['color'];
    icon?: 'arrow-up' | 'arrow-down';
    onClick?: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({ color, type = 'secondary', icon, onClick, children }) => {
    return (
        <Root color={color} type={type} onClick={onClick}>
            {children}
            {icon && <Icon type={icon} size={20} />}
        </Root>
    );
};

const backgroundFn = (p: StyledProps<Props>, state?: 'hover'): string => {
    const propsColor = (p.color && p.theme.color[p.color]) || p.color;

    let mixStart = 0.1;
    let mixColor;
    let backgroundColor;

    if (p.type === 'primary') {
        mixStart = 0.15;
        mixColor = Color('black');
        backgroundColor = Color(propsColor || colors.brand);
    } else if (p.type === 'secondary') {
        mixColor = Color(propsColor || colors.bgReversed);
        backgroundColor = Color(colors.bgDefault);
    } else {
        mixColor = Color(propsColor || colors.bgReversed);
        backgroundColor = Color(colors.bgDefault).alpha(0);
    }

    let color = backgroundColor;
    if (state) {
        color = color.mix(mixColor, state === 'hover' ? mixStart : mixStart + 0.05);
    }
    return color.string();
};

const colorFn = (p: StyledProps<Props>): string => {
    let color = p.theme.color.textSecondary;

    if (p.type === 'primary') {
        color = p.theme.color.white;
    } else if (p.color) {
        color = p.theme.color[p.color] || p.color;
    }

    return color;
};

const Root = styled(props => <button type="button" {...props} style={undefined} />)<Props>`
    display: flex;
    align-items: center;
    background: ${backgroundFn};
    color: ${colorFn};
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    border: none;
    outline: none;
    height: 40px;
    padding: 0 12px;
    border-radius: 4px;

    &:hover {
        background: ${p => backgroundFn(p, 'hover')};
    }
`;

export default Button;
