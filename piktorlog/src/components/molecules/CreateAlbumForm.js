import React, { useState } from 'react';
import { Form, Segment, Dropdown, Button, Header } from 'semantic-ui-react';

const CreateAlbumForm = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [access, setAccess] = useState('public');

    const submit = () => {
        props.createAlbum(props.user_id, title, description, access);
    };

    return (
        <Form size = 'large'>
            <Header as = 'h2' color = 'teal' textAlign = 'center'>
                Create Album
            </Header>
            <Segment>
                <Form.Input 
                    fluid
                    placeholder = 'title'
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                />
                <Form.Input 
                    fluid
                    placeholder = 'description'
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                />
                Access
                <Form.Dropdown
                    options = {[
                        {key:'public', value:'public', text:'public'}, 
                        {key:'private', value:'private', text:'private'}, 
                    ]}
                    selection      
                    value = {access}
                    // onClick = {e => setAccess(e.target.value)}
                    onChange = {(e,data) => setAccess(data.value)}
                />
                <Button color = 'teal' onClick  = {submit}>
                    Create
                </Button>
                <Button>
                    Cancel
                </Button>
            </Segment>
        </Form>
    )
}

export default CreateAlbumForm;
