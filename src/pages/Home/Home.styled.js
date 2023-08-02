import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AddEventLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHoverBg};
  }
`;
