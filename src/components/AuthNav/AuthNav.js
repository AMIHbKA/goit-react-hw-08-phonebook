import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper flex gap={'2em'}>
      <NavLinkStyled to="/login">Log in</NavLinkStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
    </Wrapper>
  );
};