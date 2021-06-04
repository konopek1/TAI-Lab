import React, { useState } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import useRepository from './Repository';
import { GroupForm } from './store';

type GroupFormProps = { initialState: GroupForm & {id: string}, onSubmitExtra: any }

const GroupFormUpdate = ({ initialState, onSubmitExtra}: GroupFormProps) => {
  const [name, setName] = useState(initialState.name);
  const [description, setDescription] = useState(initialState.description);

  const repository = useRepository();

  const onSubmit = () => {
    repository.updateGroup(initialState.id.toString(),name, description)
    onSubmitExtra()
  };

  return (
    <div>
        <Form onSubmit={onSubmit}>
            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={ e => setName(e.target.value)}
            />
            <Form.Input
              placeholder='Description'
              name='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Form.Button content='Submit' />
        </Form>
    </div>
  );
}

export default GroupFormUpdate;