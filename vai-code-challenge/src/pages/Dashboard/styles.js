import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;

`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #fff;
`

export const RemoveIcon = styled.div`
  padding: 4px;
  color: #fff;
  background: #15161b;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
  cursor: pointer;
`

export const CardContainer = styled.div`
  position: relative;
`