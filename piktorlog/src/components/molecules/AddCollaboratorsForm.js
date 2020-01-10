import React, { useState/*, useEffect*/ } from 'react';
import { Form, /*Segment, Button,*/ Header/*, Grid, GridColumn, Icon*/ } from 'semantic-ui-react';

/* 
Rough Thoughts for Future Self/Future Coders 

Form will have really 1 field: takes email address as input --> Make a call that 

*/

const AddCollaboratorsForm = (props) =>  {
    const [email, setEmail] = useState('');
    return (
        <Form>
            <Header>Add Collaborator</Header>
            <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Collaborator E-mail address"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </Form>
    )
}

export default AddCollaboratorsForm;
