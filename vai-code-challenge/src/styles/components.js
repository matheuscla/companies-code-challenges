import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 2px;
  background: #15161b;
  border: 1px solid #21222A;
  padding: 8px 16px;
  color: #999AA5;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: ${({fullSize}) =>  fullSize ? '100%' : '360px'};

  &:focus {
    border-color: #fff;
  }
`

export const Select = styled.select`
  border-radius: 2px;
  background: #15161b;
  border: 1px solid #21222A;
  padding: 8px 16px;
  color: #999AA5;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: ${({fullSize}) =>  fullSize ? '100%' : '360px'};

  &:focus {
    border-color: #fff;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 24px
  color: #fff;
  margin-bottom: 4px;
  font-weight: bold;
`

export const InputGroup = styled.div`
  display: block;
  margin-bottom: ${({lastItem}) => lastItem ? '48px' : '16px'};
`

export const Button = styled.button`
  padding: 8px 60px;
  border-radius: 4px;
  background: #fff;
  color: #15161b;
  font-weight: bold;
  text-transform: uppercase;
  width: ${({fullSize}) => fullSize ? '100%' : 'auto'};
  margin-top: ${({top}) => top ? `${top}px` : '0'};
`

export const Logo = styled.img`
  width: ${({small}) => small ? '80px' : '200px'};
  object-fit: cover;
  margin-bottom: ${({bottom}) => `${bottom}px` || '0'};
`