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
  padding-top: ${p => p.theme.space[8]}px;
  padding-bottom: ${p => p.theme.space[8]}px;
  padding-left: ${p => p.theme.space[8]}px;
  padding-right: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};
`;
