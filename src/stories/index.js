import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from '../index';

storiesOf('Card', module)
  .add('empty view', () => (
    <Card />
  ))
  .add('with content', () => (
    <Card>😀 😎 👍 💯</Card>
  ))
  .add('custom styles', () => {
    const style = {
      border: '3px red solid',
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Card style={ style } />
    );
  });
