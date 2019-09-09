import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import HoroscopeModule, { horoscopeSigns } from 'src/components/HoroscopeModule';
import StoryBlock from 'src/components/StoryBlock';
import theme from 'src/theme';

const stories = [
    {
        headline:
            '‘Blunt-force influence’: How Beijing is using social media to sway HK protesters',
    },
    {
        headline: 'Travel sickness: Consumers overpay millions on foreign money, says ACCC',
    },
    {
        headline: 'Arthur or Martha: the volatile voters behind the election poll fail',
    },
    {
        headline: 'Network 10 axes Saturday Night Rove after just two episodes',
    },
];

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Root>
                    <Header>Nine.com.au</Header>
                    <Grid>
                        <GridColumn columns={8}>
                            <Main>
                                {stories.map(s => (
                                    <StoryBlock story={s} />
                                ))}
                            </Main>
                        </GridColumn>
                        <GridColumn columns={4}>
                            <Utility>
                                <HoroscopeModule
                                    title="Horoscope"
                                    signs={horoscopeSigns}
                                    readMoreLink="https://honey.nine.com.au/horoscope"
                                />
                            </Utility>
                        </GridColumn>
                    </Grid>
                </Root>
                <GlobalStyle />
            </>
        </ThemeProvider>
    );
};

const Root = styled.div`
    height: 100%;
    max-width: 1030px;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: system-ui, sans-serif;
    font-size: 16px;
    color: #333;

    * {
        box-sizing: border-box;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
`;

const GridColumn = styled.div<{ columns: number }>`
    flex: 0 1 ${p => `${(p.columns / 12) * 100}`}%;
    padding: 16px;
`;

const Header = styled.h1`
    margin: 0 0 16px;
    line-height: 1;
    height: 100px;
    display: flex;
    align-items: center;
`;

const Main = styled.div``;

const Utility = styled.div`
    display: flex;
    flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    h1 {
        margin: 0 0 16px;
    }
`;

export default hot(App);
