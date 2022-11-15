import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PagesLinks = styled(NavLink)`
  &.active {
    background-color: red;
  }
`;
