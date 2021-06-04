import React from 'react';
import { useState } from 'react';
import { Button, Card, Divider } from 'semantic-ui-react';
import GroupFormUpdate from './GroupFormUpdate';
import useRepository from './Repository';
import { Group } from './store';

export type GroupProps = Group

const GroupView: React.FC<GroupProps> = ({ description, name, id }: GroupProps) => {
    const repo = useRepository()
    const [doUpdate, setToUpdate] = useState(false);


    return (
        <>
            <Card>
                <Card.Header as='h2'>{name}</Card.Header>
                <Card.Content>{description}</Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={() => setToUpdate(true)}>Update</Button>
                        <Button basic color='red' onClick={() => repo.removeGroup(id)}>Remove</Button>
                    </div>
                </Card.Content>
            </Card>
            <Divider></Divider>
            {doUpdate ? <GroupFormUpdate onSubmitExtra={() => setToUpdate(false)} initialState={{ description, name, id }}></GroupFormUpdate> : null}
        </>
    )
}

export default GroupView;
