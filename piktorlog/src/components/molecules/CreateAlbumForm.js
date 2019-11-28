import React, { useState } from 'react';
import { Form, Segment, Dropdown, Button, Header, Grid, Container, GridColumn, Icon, Divider, List } from 'semantic-ui-react';

const CreateAlbumForm = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [access, setAccess] = useState('public');

    const [metaFieldName, setMetaFieldName] = useState('');
    const [metaFieldValue, setMetaFieldValue] = useState('');
    const [metadata, setMetaData] = useState([]);

    const addMeta = (metaFieldName, metaFieldValue) => {
        metadata.push({name: metaFieldName, value: metaFieldValue});
        setMetaFieldName('');
        setMetaFieldValue('');
        console.log('metadata: ', metadata)
    }
    
    const createAlbum = () => {
        props.createAlbum(props.user_id, title, description, access, metadata);
    };

    return (
        <Form size = 'large'>
            <Header as = 'h2' color = 'teal' textAlign = 'center'>
                Create Album
            </Header>
            <Segment>
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
                
                <Form.Dropdown
                    options = {[
                        {key:'public', value:'public', text:'public'}, 
                        {key:'private', value:'private', text:'private'}, 
                    ]}
                    selection      
                    value = {access}
                    onChange = {(e,data) => setAccess(data.value)}
                />
                </Segment>
                <Segment>
                <Grid >
                    <Header as = 'h5' color = 'teal' textAlign = 'left'>
                        Add Metadata
                    </Header>
                    <Grid.Row colums = {3}>
                        <GridColumn width = {7}>
                            <Form.Input 
                                fluid
                                placeholder = 'Name'
                                value = {metaFieldName}
                                onChange = {e => setMetaFieldName(e.target.value)}
                            />
                        
                        </GridColumn>
                        <GridColumn width = {7}>
                            <Form.Input 
                                fluid
                                placeholder = 'Value'
                                value = {metaFieldValue}
                                onChange = {e => setMetaFieldValue(e.target.value)}
                            />
                        </GridColumn>
                        <GridColumn>
                            <Button icon onClick = {e => addMeta(metaFieldName, metaFieldValue)}>
                                <Icon name = 'plus circle' />
                            </Button>
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row colums = {1}>
                        <GridColumn width = {16}>
                            <List>
                            {metadata.map((metadataObject, i) => {
                                return (
                                <List.Item key = {i}>
                                    <List.Content>
                                        <Grid>
                                        <Grid.Row columns = {2}>
                                            <GridColumn>
                                                {metadataObject.name}
                                            </GridColumn>
                                            <GridColumn>
                                                {metadataObject.value}
                                            </GridColumn>
                                        </Grid.Row>
                                        </Grid>
                                    </List.Content>
                                </List.Item>
                                )
                            })}
                            </List>
                        </GridColumn>
                    </Grid.Row>

                </Grid>  
                </Segment>   
                
                
                
                <Button color = 'teal' onClick  = {createAlbum}>
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
