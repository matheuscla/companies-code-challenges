import styled from 'styled-components';

export const Container = styled.div`
  background: #1A1B22;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 16px;
  min-height: 300px;
  margin-top: ${({top}) => top ? `${top}px` : 0};
`

export const Label = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
`

export const Title = styled.h1`
  
`

export const Divider = styled.hr`
  height: 1px;
  border: 0;
  background: #21222A;
  margin: 16px -16px;
`