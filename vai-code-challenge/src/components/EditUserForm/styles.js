import styled from 'styled-components';

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const CancelBtn = styled.button`
  padding: 4px 10px;
  color: #15161b;
  background: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  border-radius: 4px;
  border: 0;
`

export const Submit = styled(CancelBtn)`
  background: #1dbc60;
  color: #fff;
  margin-left: 16px;
`