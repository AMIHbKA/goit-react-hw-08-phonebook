import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-row-gap: 0.5em;
  max-width: 50em;
  box-shadow: ${props => props.theme.shadows.box};
  padding: 15px;
  border-radius: 5px;

  li {
    display: grid;
    grid-template-columns: 2em minmax(250px, 1fr) minmax(30px, 180px) 2em;
    grid-column-gap: 0.5em;
    align-items: center;

    word-wrap: break-word;
    color: ${props => props.theme.colors.secondary};

    &:not(:last-child)::after {
      margin-top: 0.5em;
      content: '';
      border-bottom: 1px solid ${props => props.theme.colors.hover};
      grid-column: 1 / -1;
    }

    span {
      font-weight: 500;
    }

    .icon {
      width: 1.5em;
      height: 1.5em;
      fill: ${props => props.theme.colors.buttonBg};
      transition: ${props => props.theme.animations.fill};

      &:hover,
      &:focus {
        fill: ${props => props.theme.colors.delete};
      }
    }
  }
`;
