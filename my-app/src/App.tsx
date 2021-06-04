import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header } from 'semantic-ui-react';
import './App.css';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
import MemberForm from './components/MemberForm';
import MemberList from './components/MemberList';
import { storeContext } from './components/store';

function App() {

  const [store, updateStore] = useState({
    groups: [], members: [], memberForm: {
      name: '',
      secondName: '',
      email: '',
      group: 0
    }
  });

  return (
    <div className="App">
      <storeContext.Provider value={{ store, updateStore }}>
        <Container>
          <Grid celled='internally'>
            <Grid.Row columns={2}>
              <Grid.Column><Header as="h1">Groups</Header></Grid.Column>
              <Grid.Column><Header as="h1">Members</Header></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <GroupList></GroupList>
              </Grid.Column>
              <Grid.Column>
                <MemberList></MemberList>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <GroupForm></GroupForm>
              </Grid.Column>
              <Grid.Column>
                <MemberForm ></MemberForm>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </storeContext.Provider>
    </div >
  );
}

export default App;
