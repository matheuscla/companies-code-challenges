import React from 'react';

import { Label, Input, InputGroup, Select, Button } from '../../styles/components'; 
import { Container } from './styles';


function Filters() {
  return(
    <Container>
      <InputGroup>
        <Label>Name:</Label>
        <Input fullSize />
      </InputGroup>
      <InputGroup>
        <Label>Email:</Label>
        <Input fullSize />
      </InputGroup>
      <InputGroup>
        <Label>Gender:</Label>
        <Select fullSize>
          <option></option>
          <option>Male</option>
          <option>Female</option>
        </Select>
      </InputGroup>
      
      <Button top={16} fullSize>Clear Filters</Button>
    </Container>
  );
}

export default Filters;