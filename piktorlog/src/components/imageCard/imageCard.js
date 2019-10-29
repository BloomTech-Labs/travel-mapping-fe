import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardExampleImageCard = (props) => (
  <Card centered>
    <Image src='./assets/ronswanson.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Ron Swanson</Card.Header>
      <Card.Meta>Loves Coffee</Card.Meta>
      <Card.Description>
        Ron sternly recites "{props.descriptionText}" while sipping on his
        coffee.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>This is pretty cool, right?</Card.Content>
  </Card>
);

export default CardExampleImageCard;
