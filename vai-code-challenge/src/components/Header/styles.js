import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  background: #18181B;
  padding: 12px 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`

export const Link = styled(RouterLink)`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 16px;
  color: #fff;
  text-decoration: none;
`

export const Logout = styled.button`
  padding: 4px 10px;
  color: #15161b;
  background: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  border-radius: 4px;
  margin-left: 26px;
`