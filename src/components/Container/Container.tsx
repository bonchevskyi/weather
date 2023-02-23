import StyledContainer from './Container.styled';

interface Props {
    children: React.ReactNode,
}

function Container({ children }: Props) {
    return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
