import React, { useState } from 'react';
import { Form, /*Segment,*/ Button, Header/*, Grid, GridColumn, Icon*/ } from 'semantic-ui-react';

import { useCreateInvite, useLogOnChange } from '../../store/requests/hooks';

/* 
Rough Thoughts for Future Self/Future Coders 

Form will have really 1 field: takes email address as input --> Make a call that 

*/

const AddCollaboratorsForm = ({ album_id, refresh }) =>  {

  const [email, setEmail] = useState('');
  const [createInvite, , error] = useCreateInvite(refresh);
  useLogOnChange('invite error:', error);

  const handleSubmit = () => {

    createInvite(album_id, email);
    setEmail('');

  };

  return (
    <Form onSubmit={handleSubmit}>

      <Header>Add Collaborator</Header>

      <Form.Input
        fluid
        icon="mail"
        iconPosition="left"
        placeholder="Collaborator E-mail address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Button type="submit">Send Invite</Button>

    </Form>
  );

};

export default AddCollaboratorsForm;
