import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
/*const style = {
    backgroundColor: '#0069D9',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: '#0069D9'
}

const danger = {
    backgroundColor: '#0069D9',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: '#0069D9'
}

const warning = {
    backgroundColor: '#0069D9',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: '#0069D9'
}

const success = {
    backgroundColor: '#0069D9',
    color: 'white',
    borderRadius: '2px',
    padding: '5px 25px',
    border: '#0069D9'
}
*/


storiesOf('Button', module)
    .add('Primary', () => <Button 
        label="Primary" 
        type="primary"
        />) 
        .add('Large Primary', () => <Button 
        label="Large Primary Button" 
        type="primary"
        />) 

        .add('Danger', () => <Button 
        label="Danger" 
        type="danger"
        />) 
        .add('Large Danger', () => <Button 
        label="Large Danger Button" 
        type="danger"
        />) 

        .add('Warning', () => <Button 
        label="Warning" 
        type="warning"
        />) 

        .add('Success', () => <Button 
        label="Success" 
        type="success"
        />) 

        