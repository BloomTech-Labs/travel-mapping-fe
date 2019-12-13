import React, { useState, useEffect } from 'react';
import { Form, Segment, Button, Header, Grid, GridColumn, Icon } from 'semantic-ui-react';

import AlbumMetaList from './AlbumMetaList';

const CreateAlbumForm = (props) => {

    useEffect(() => {
        // populate form values for editing if component receives an album prop
        // should not have any effect when used for album creation
        if (props.album) {
            setTitle(props.album.title);
            setDescription(props.album.description);
            setAccess(props.album.access);
            // the incoming server data, and the form structure meta completely differently
            // I'd like to resolve this later, but this bandaid works right now.
            setMetaData(Object.entries(props.album.meta).map(e => ({
                name: e[0],
                value: e[1]
            })));
        }
    }, [props]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [access, setAccess] = useState('public');

    const [metaFieldName, setMetaFieldName] = useState('');
    const [metaFieldValue, setMetaFieldValue] = useState('');
    const [metadata, setMetaData] = useState([]);

    const addMeta = (metaFieldName, metaFieldValue) => {
        setMetaData(prev => [...prev, { name: metaFieldName, value: metaFieldValue }]);
        setMetaFieldName('');
        setMetaFieldValue('');
        console.log('metadata: ', metadata)
    };
    
    const createAlbum = () => {
        props.createAlbum(props.user_id, title, description, access, metadata);
    };

    const removeMeta = (name) => {
        setMetaData(prev => prev.filter(e => e.name !== name));
    };

    return (
        <Form size = 'large'>
            <Header as = 'h2' color = 'teal' textAlign = 'center'>
                {props.editing ? 'Edit Album' : 'Create Album'}
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
                        <GridColumn style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon 
                                name="plus circle"
                                color="teal"
                                size="big"
                                onClick={e => addMeta(metaFieldName, metaFieldValue)}
                            />
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row colums = {1}>
                        <GridColumn width = {16}>
                            <AlbumMetaList 
                                meta={metadata}
                                remove={removeMeta}
                            />
                        </GridColumn>
                    </Grid.Row>

                </Grid>  
                </Segment>   
                
                
                
                <Button color = 'teal' onClick  = {createAlbum}>
                    {props.editing ? 'Submit Edit' : 'Create'}
                </Button>
                <Button>
                    Cancel
                </Button>
            </Segment>
        </Form>
    )
}

export default CreateAlbumForm;
