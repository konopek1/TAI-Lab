import React, { useState } from 'react';
import { Button, Card, Divider } from 'semantic-ui-react';
import MemberForm from './MemberForm';
import MemberFormUpdate from './MemberFormUpdate';
import useRepository from './Repository';
import { Member } from './store'

export type MemberProps = Member

const MemeberView: React.FC<MemberProps> = ({ email, group, name, secondName, id }: MemberProps) => {
    const repo = useRepository()

    const [doUpdate, setToUpdate] = useState(false);

    return (
        <>
            <Card>
                <Card.Header as='h2'>{`${name} ${secondName}`}</Card.Header>
                <Card.Content>
                    {`Group: ${group.name}`}
                    <br></br>
                    {`Email: ${email}`}
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={() => setToUpdate(true)}>Update</Button>
                        <Button basic color='red' onClick={() => repo.removeMember(id)}>Remove</Button>
                    </div>
                </Card.Content>
            </Card>
            <Divider></Divider>
            {doUpdate ? <MemberFormUpdate onSubmitExtra={() => setToUpdate(false)} initialState={{ email, group: Number(group.id), name, secondName, id }}></MemberFormUpdate> : null}
        </>
    )
}

export default MemeberView;