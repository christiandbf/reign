import styled from 'styled-components';

export const Container = styled.div`
    padding: 3em 3em 3em 2em;
    background-color: #333333;
    color: #fcfcfc;
`;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
`;

export const Header = () =>
    <Container>
        <header>
            <Title>HN Feed</Title>
            <p>We &lt;3 hacker news!</p>
        </header>
    </Container>

export default Header;
