import styled from 'styled-components';

export const Wrapper = styled.div`
  ${props => props.flex && `display: flex;`}
  ${props => props.fdc && `flex-direction: column;`}
  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.ai && `align-items: ${props.ai};`}
  ${props =>
    props.boxshadow &&
    `box-shadow: ${props.boxshadow} || ${props => props.theme.shadow.box};`}
  ${props => props.w && `width: ${props.w};`}
  ${props => props.h && `height: ${props.h};`}

  ${props => props.border && `border: ${props.border};`}
  ${props => props.br && `border-radius: ${props.br};`}
  ${props => props.h && `height: ${props.h};`} 
  ${props => props.m && `margin-top: ${props.m};`}
  ${props => props.mt && `margin-top: ${props.mt};`}
  ${props => props.mb && `margin-bottom: ${props.mb};`}
  ${props => props.ml && `margin-left: ${props.ml};`}
  ${props => props.mr && `margin-right: ${props.mr};`}
  ${props => props.mia && `margin-inline: auto;`}
    

    ${props => props.p && `padding: ${props.p};`}
    ${props => props.pt && `padding-top: ${props.pt};`}
    ${props => props.pb && `padding-bottom: ${props.pb};`}
    ${props => props.pl && `padding-left: ${props.pl};`}
    ${props => props.pr && `padding-right: ${props.pr};`}
    ${props => props.pi && `padding-inline: ${props.pi};`}
    ${props => props.pb && `padding-block: ${props.pb};`}

    ${props => props.jcc && `justify-content: center;`}
    ${props => props.jcsb && `justify-content: space-between;`}
    ${props => props.jc && `justify-content: ${props.jc};`}

    ${props =>
    props.ai &&
    `align-items: ${props.ai};
  `}
  ${props =>
    props.aic &&
    `align-items: center;
  `}

${props =>
    props.ta &&
    `text-align: ${props.ta};
  `}
  ${props =>
    props.tac &&
    `text-align: center;
  `}
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 80vh;

  &:before {
    display: block;
    content: '';
    flex-grow: 1;
    height: 24px;
  }

  &:after {
    display: block;
    content: '';
    flex-grow: 1;
    height: 24px;
  }
`;