import React from 'react';
import "./Select.css"

// This is a functional component - just sent up a little differently as an arrow function!
//const Input = (props) => {


    //return (
            
    //
        
    
    //)

//}

const Select = (props) => {
    let classList = '';
    
    let types = ['clear', 'faded']
    
    if(types.includes(props.type)){
        classList+= `select-${props.type}`
    }
    
    if(props.small){
        classList += ` select-${props.type}-small`
    }
    
    if(props.medium){
        classList += ` select-${props.type}-medium`
    }
    
    if(props.large){
        classList += ` select-${props.type}-large`
    }
    
    
    
    
        return (
        
            
            //<div>
            //<p>{props.text}</p>    
            //<input placeholder={props.placeholder}/>
            //</div>

             <div>
             
             <select className={classList}>
                   <option>{props.text}</option>
                 </select>
               
             </div>
            
        
        )
    
    }
    
    
    




export default Select; 