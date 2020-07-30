import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-grid-system';

import { editUser } from '../../store/ducks/users';

import { BtnGroup, CancelBtn, Submit } from './styles';
import { Input, InputGroup, Label, Select } from '../../styles/components';

function EditUserForm({ hideVisible }) {
  const user = useSelector(state => state.users.selectedUser);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: user?.name?.first,
    email: user?.email,
    phone: user?.phone,
    age: user?.dob?.age,
    gender: user?.gender,
    nat: user?.nat
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedUser = {
      name: { first: values.name, last: user?.name?.last },
      email: values.email,
      phone: values.phone,
      age: { dob: { age: values.age }},
      gender: values.gender,
      nat: values.nat
    }

    await dispatch(editUser(editedUser));

    hideVisible();
  }

  return(
    <form onSubmit={handleSubmit}>
      <Row>
        <Col sm={6}>
          <InputGroup>
            <Label htmlFor='name'>Name:</Label>
            <Input
              name='name'
              value={values.name}
              required
              onChange={e => setValues({ ...values, name: e.target.value})} 
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='email'>Email:</Label>
            <Input
              name='email'
              required
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value})} 
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='phone'>Phone:</Label>
            <Input
              name='phone'
              value={values.phone}
              onChange={e => setValues({ ...values, phone: e.target.phone})} 
            />
          </InputGroup>
        </Col>
        <Col sm={6}>
          <InputGroup>
            <Label htmlFor='age'>Age:</Label>
            <Input
              name='age'
              required
              value={values.age}
              onChange={e => setValues({ ...values, age: e.target.value})} 
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor='gender'>Gender:</Label>
            <Select value={values.gender} onChange={e => setValues({ ...values, gender: e.target.value})} >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor='nat'>Nationality:</Label>
            <Input
              name='nat'
              required
              value={values.nat}
              onChange={e => setValues({ ...values, nat: e.target.value})} 
            />
          </InputGroup>
          
          <BtnGroup>
            <CancelBtn onClick={hideVisible}>Cancel</CancelBtn>
            <Submit>Save</Submit>
          </BtnGroup>
        </Col>
      </Row>
    </form>
  );
}

export default EditUserForm;