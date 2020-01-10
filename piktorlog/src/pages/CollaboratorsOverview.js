import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import AddCollaboratorsForm from '../components/molecules/AddCollaboratorsForm'

import { Dropdown } from 'semantic-ui-react'

/*
Mock Data for Dropdown based on React Semantic UI example:
See: https://codesandbox.io/s/semantic-ui-example-7tkob

*/
const collaborators = [
    {
        key: 'album',
        text: 'Album 1',
        value: 'Album 1',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
      }
]

/*
Component Structure/Flow 

- Dropdown menu populated by known albums (use filter to show only the albums where album.user_id == currentuser.user_id)
- Form where you can entire email of collaborator 
- "Display area" which lists the collaborators of a selected album 

- When album is selected it will populate a list 
of names/emails of collaborators for that album
  - Each collaborator will have their name along with an X button next to that name. (tab)
  - Clicking X removes that collaborators
*/


const CollaboratorsOverview = () => {


    return (
        <div>
            <h1>COMING SOON!</h1>
            <AddCollaboratorsForm />
        </div>
    )
};

export default CollaboratorsOverview;