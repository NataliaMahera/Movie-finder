import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ActivePage = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #b91212;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #b91212;
  }
`;
