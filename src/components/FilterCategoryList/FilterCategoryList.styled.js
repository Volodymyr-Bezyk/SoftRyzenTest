import styled from 'styled-components';

export const FilterButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 56px;
  margin-right: ${p => p.theme.space[12]}px;
`;

export const FilterButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  span {
    color: ${p =>
      p.$showSortMenu ? p.theme.colors.accent : p.theme.colors.buttonTextColor};
  }

  svg {
    color: ${p =>
      p.$filterMenu ? p.theme.colors.accent : p.theme.colors.buttonTextColor};
    transform: ${p => (p.$filterMenu ? 'translateX(5px)' : 'translateX(0)')};
    transition: transform 250ms ease-in-out 100ms, opacity 250ms ease-in-out,
      color 250ms ease-in-out;
    z-index: ${p => (p.$filterMenu ? 2 : 0)};

    @media (min-width: ${p => p.theme.screens.tablet}) {
      transform: translate(0);
      transition: color 250ms ease-in-out;
      z-index: 2;
    }
  }

  &:hover,
  &:focus {
    svg {
      color: ${p => p.theme.colors.accent};
    }
    span {
      color: ${p => p.theme.colors.accent};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    justify-content: flex-end;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const FilterTextWrap = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  text-align: end;
  z-index: 1;

  height: 100%;
  width: 158px;
  padding: ${p => p.theme.space[8]}px 21px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};

  border-top-left-radius: ${p => p.theme.radii.button};
  border-top-right-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$filterMenu ? 1 : 0)};
  transform: ${p => (p.$filterMenu ? 'translateX(0)' : 'translateX(-34px)')};
  pointer-events: ${p => (p.$filterMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out 100ms, opacity 200ms ease-in-out 100ms;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    transform: translate(0);
    pointer-events: all;
    transition: transform 250ms ease-in-out, opacity 200ms ease-in-out;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const FilterText = styled.span`
  display: none;
  margin-right: ${p => p.theme.space[8]}px;

  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};

  z-index: 2;
  transition: color 250ms ease-in-out;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
  }
`;

export const FilterTextMobile = styled.span`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;

  width: 158px;
  padding-top: ${p => p.theme.space[2]}px;
  z-index: 1;

  border-bottom-left-radius: ${p => p.theme.radii.button};
  border-bottom-right-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$filterMenu ? 1 : 0)};
  transform: ${p => (p.$filterMenu ? 'translateY(0)' : 'translateY(-30%)')};
  pointer-events: ${p => (p.$filterMenu ? 'all' : 'none')};
  transition: transform 250ms ease-in-out 250ms, opacity 200ms ease-in-out 100ms;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    top: 56px;
    left: 0;
    width: 143px;
    transform: translate(0);
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;
export const FilterListItem = styled.li`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[12]}px;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
    border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};
  }
`;
export const FilterListItemButton = styled.button`
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

export const FilterListItemText = styled.span`
  color: ${p => p.theme.colors.sortListItemColor};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.max};
  transition: color 250ms ease-in-out;
`;
