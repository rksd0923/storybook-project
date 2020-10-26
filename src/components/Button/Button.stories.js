import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button 
        label="Do Something" 
        type="primary"
        />) 
        .add('Primary Hover', () => <Button 
        label="Do Something" 
        type="primary"
        hover
        
        />) 

        .add('Primary Outline', () => <Button 
        label="Do Something" 
        type="primary"
        outline
               
        />) 

        .add('Primary Faded', () => <Button 
        label="Primary" 
        type="primary"
        faded
        label="Do Something"
        />) 

        
        .add('Large Primary', () => <Button
        label="Do Something"
        type="primary"
        large
    />)

    .add('Large Primary Faded', () => <Button
        label="Do Something"
        type="primary"
        large
        faded
    />)

    .add('Large Primary Outline', () => <Button
        label="Do Something"
        type="primary"
        large
        outline
    />)

    

        .add('Danger', () => <Button 
        label="Danger" 
        type="danger"
        />) 

        .add('Danger Hover', () => <Button 
        label="Do Something" 
        type="danger"
        hover
        
        />) 

        .add('Danger Outline', () => <Button 
        label="Do Something" 
        type="danger"
        outline
               
        />) 

        .add('Danger Faded', () => <Button 
        label="Do Something" 
        type="danger"
        faded
        label="Do Something"
        />) 

        
        .add('Large Danger', () => <Button
        label="Do Something"
        type="danger"
        large
    />)

    .add('Large Danger Faded', () => <Button
        label="Do Something"
        type="danger"
        large
        faded
    />)

    .add('Large Danger Outline', () => <Button
        label="Do Something"
        type="danger"
        large
        outline
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

        