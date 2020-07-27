import styled from 'styled-components';

export const Container = styled.div`
  background: #1A1B22;
  border-radius: 4px;
  width: 254px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    margin-top: -10px;
    transition: all 0.4s linear;
  }
`

export const Avatar = styled.img`
  width: 100%;
  height: 144px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const CardInfo = styled.div`
  padding: 8px 18px 18px;
`

export const Divider = styled.hr`
  height: 1px;
  background: #4B4C56;
  border: 0;
  margin: 16px -18px 16px -18px;
`

export const Label = styled.p`
`