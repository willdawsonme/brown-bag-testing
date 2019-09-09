import React from 'react';

interface Props {
    type: keyof typeof paths;
    size?: number;
}

const Icon: React.FC<Props> = ({ type, size = 24 }) => {
    const path = paths[type];
    return (
        <svg width={size} height={size} viewBox="0 0 23 23">
            <path d={path} fill="currentColor" />
        </svg>
    );
};

const paths = {
    'arrow-up': 'M7 14l5-5 5 5z',
    'arrow-down': 'M7 10l5 5 5-5z',
};

export default Icon;

/* eslint @typescript-eslint/no-use-before-define:0 */
