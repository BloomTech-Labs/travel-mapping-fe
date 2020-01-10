import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import AddCollaborators from '../components/molecules/AddCollaboratorsForm'

import { Dropdown } from 'semantic-ui-react'

/*
Mock Data based on React Semantic UI example:
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



const CollaboratorsOverview = (collaborators) => {


    return (
        <React.fragment>
            <Dropdown
            placeholder='Select Album'
            fluid
            selection
            options={collaborators}
            />
            <h1>COMING SOON!</h1>
            <AddCollaborators/>
        </React.fragment>
    )
};

export default CollaboratorsOverview (collaborators);