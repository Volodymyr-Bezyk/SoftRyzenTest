import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkHref = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    color: ${p => p.theme.colors.accent};
    transition: color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    svg,
    span {
      color: ${p => p.theme.colors.hover};
    }
  }
`;
export const BackButtonText = styled.span`
  margin-left: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};
  transition: color 250ms ease-in-out;
`;
