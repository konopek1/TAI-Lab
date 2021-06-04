import React, { useState } from 'react' 
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../constants';
import useRepository from './Repository';

const GroupForm = () => {
    const [name, setName] = useState('');
    const [description , setDescription] =  useState('');
    const repository = useRepository();    

    const handleSubmit = () => {
        repository.addGroup(name, description)
    };

    
    return (
        <div>
        <Form onSubmit={handleSubmit}>
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

export default GroupForm;