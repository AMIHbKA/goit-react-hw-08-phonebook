import { styled } from 'styled-components';

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.header};
  text-align: center;
  margin-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
`;