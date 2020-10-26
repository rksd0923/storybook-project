import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';
import Select from './Select'

storiesOf('Input', module)
    
.add('Regular Input', () => <Input 
     placeholder="Email" 
     type = "first"
     small
     text="Email"
       
        />) 

        .add('Medium Input', () => <Input 
     placeholder="Email" 
     type = "second"
     medium
     text="Email"
       
        />) 

        .add('Large Input', () => <Input 
     placeholder="Email" 
     type = "third"
     large
     text="Email"
       
        />) 

        .add('Regular Select', () => <Select 
     text="Select" 
     type = "clear"
     small
     
       
        />) 

        .add('Medium Select', () => <Select 
     text="Select" 
     type = "clear"
     medium
     
       
        />) 

        .add('Large Select', () => <Select 
     text="Select" 
     type = "clear"
     large
     
       
        />) 

        .add('Regular Faded Select', () => <Select 
     text="Select" 
     type = "faded"
     small
     
       
        />) 

        .add('Medium Faded Select', () => <Select 
     text="Select" 
     type = "faded"
     medium
     
       
        />) 

        .add('Large Faded Select', () => <Select 
     text="Select" 
     type = "faded"
     large
     
       
        />) 


       