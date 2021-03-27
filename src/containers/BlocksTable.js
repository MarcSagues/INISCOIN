import React, { Component } from 'react';
import axios from 'axios';

class BlocksTable extends Component {

    constructor(){
        super();
        this.arrayHTML = []
    }
    

    
    componentDidMount(){
       // axios.get('/blocks').then(result => { console.log(result)}).catch(console.log);
         

    
    for (let index = 0; index < 1; index++) {
      const value = [<tr><td>1</td>
                    <td>1</td>
                   </tr>]
      this.arrayHTML.push(value); 
      
    }
}
    
    render(){
        return this.arrayHTML;
    };
}
export default BlocksTable;