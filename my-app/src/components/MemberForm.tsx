import React, { useState } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import useRepository from './Repository';
import { MemberForm } from './store';

type MemberFormProps = { initialState?: MemberForm }

const MemberFormView = ({ initialState = {
  name: '',
  secondName: '',
  email: '',
  group: 0
}}: MemberFormProps) => {
  const [name, setName] = useState(initialState.name);
  const [secondName, setSecondName] = useState(initialState.secondName);
  const [email, setEmail] = useState(initialState.email);
  const [group, setGroup] = useState(initialState.group);

  const repository = useRepository();

  const onSubmit = () => {
    repository.addMember(email,name,secondName,group)
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Input
            placeholder='Second name'
            name='secondName'
            value={secondName}
            onChange={e => setSecondName(e.target.value)}
          />
        </Form.Group>
        <Form.Input
          placeholder='Email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Dropdown
          inline
          placeholder='Select group'
          selection
          options={repository.store.groups.map(group => ({ value: group.id, description: group.description, text: group.name }))}
          onChange={(e, { value }) => setGroup(Number(value))}
        />
        <Form.Button content='Submit' />
      </Form>
    </div>
  );
}

export default MemberFormView;