import React from 'react';
import styled from 'styled-components';

interface Story {
    headline: string;
}

interface Props {
    story: Story;
}

const StoryBlock: React.FC<Props> = ({ story }) => {
    const { headline } = story;
    return (
        <Root>
            <Headline>{headline}</Headline>
            <Image />
        </Root>
    );
};

const Root = styled.div`
    & + & {
        margin-top: 32px;
    }
`;

const Headline = styled.h2`
    margin: 0 0 16px;
    line-height: 1.2;
    color: #999;
`;

const Image = styled.div`
    display: block;
    background: #f5f5f5;
    width: 100%;

    &:after {
        content: '';
        display: block;
        padding-bottom: 56.25%;
    }
`;

export default StoryBlock;
