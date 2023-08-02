import styled from 'styled-components';

export const SortButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 56px;
  margin-right: ${p => p.theme.space[12]}px;
`;

export const SortButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  svg {
    color: ${p =>
      p.$showSortMenu ? p.theme.colors.accent : p.theme.colors.buttonTextColor};
    transform: ${p => (p.$showSortMenu ? 'translateX(-8px)' : 'translateX(0)')};
    transition: transform 250ms ease-in-out 100ms, opacity 250ms ease-in-out,
      color 250ms ease-in-out;
    z-index: ${p => (p.$showSortMenu ? 2 : 0)};
  }

  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.accent};
    }
  }
`;

export const SortTextWrap = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: start;

  height: 100%;
  width: 170px;
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[12]}px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};

  border-top-left-radius: ${p => p.theme.radii.button};
  border-top-right-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showSortMenu ? 1 : 0)};
  transform: ${p =>
    p.$showSortMenu ? 'translateX(-114px)' : 'translateX(-80px)'};
  pointer-events: ${p => (p.$showSortMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out 100ms, opacity 200ms ease-in-out 100ms;
`;

export const SortText = styled.span`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};
`;

export const SortList = styled.ul`
  position: absolute;
  top: 56px;
  left: -114px;

  width: 170px;
  padding: ${p => p.theme.space[2]}px 0;

  border-bottom-left-radius: ${p => p.theme.radii.button};
  border-bottom-right-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showSortMenu ? 1 : 0)};
  transform: ${p => (p.$showSortMenu ? 'translateY(0)' : 'translateY(-30%)')};
  pointer-events: ${p => (p.$showSortMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out 250ms, opacity 200ms ease-in-out 100ms;
`;

export const SortListItem = styled.li`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[12]}px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
    border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};
  }
`;

export const SortListItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${p => p.theme.colors.white};

  &:hover,
  &:focus {
    span {
      color: ${p => p.theme.colors.accent};
    }
  }
`;

export const SortListItemButtonText = styled.span`
  color: ${p => p.theme.colors.sortListItemColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.max};
  transition: color 250ms ease-in-out;
`;
