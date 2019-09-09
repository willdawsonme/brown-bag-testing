import React, { useState } from 'react';
import styled from 'styled-components';
import { HoroscopeSign } from 'src/types';
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import useLocalStorage from 'src/hooks/useLocalStorage';
import SignIcon from './SignIcon';

interface Props {
    title: string;
    signs: HoroscopeSign[];
    readMoreLink: string;
}

const HoroscopeModule: React.FC<Props> = ({ title, signs, readMoreLink }) => {
    const [selecting, setSelecting] = useState(false);
    const [selectedSign, setSelectedSign] = useLocalStorage('selected-horoscope', 'Aries');
    const selected = signs.find(s => s.name === selectedSign) || signs[0];

    const handleSelectStarSign = (sign: HoroscopeSign): void => {
        setSelectedSign(sign.name);
        setSelecting(false);
    };

    return (
        <Root>
            <Text preset="headingTwo">{title}</Text>
            <Selected>
                <Image
                    src={`https://nine.com.au/static/assets/images/${selected.name.toLowerCase()}-daily-horoscope.png`}
                />
                <Details>
                    <Text color="brand" weight="bold">
                        {selected.name}
                    </Text>
                    <DescriptionText>{selected.description}</DescriptionText>
                </Details>
            </Selected>
            <Buttons>
                <Button
                    type="primary"
                    onClick={() => {
                        window.location.href = readMoreLink;
                    }}
                >
                    Read more
                </Button>
                <Button
                    type="tertiary"
                    color="brand"
                    icon={selecting ? 'arrow-up' : 'arrow-down'}
                    onClick={() => setSelecting(s => !s)}
                >
                    Set star sign
                </Button>
            </Buttons>
            {selecting && (
                <StarSigns>
                    {signs.map(sign => (
                        <StarSign key={sign.name} onClick={() => handleSelectStarSign(sign)}>
                            <SignIcon sign={sign.name.toLowerCase()} />
                            <Text preset="small">{sign.name}</Text>
                        </StarSign>
                    ))}
                </StarSigns>
            )}
        </Root>
    );
};

const Root = styled.div``;

const Selected = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
`;

const DescriptionText = styled(Text)`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Details = styled.div`
    flex: 0 1 auto;
`;

const Image = styled.img`
    display: block;
    width: 10%;
    margin-right: 16px;
    flex: 1 0 120px;
`;

const StarSigns = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StarSign = styled.div`
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    &:hover {
        text-decoration: underline;
        cursor: default;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

export default HoroscopeModule;
