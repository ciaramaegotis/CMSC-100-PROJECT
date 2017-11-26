import React, { Component } from 'react';

class ViewQuestions extends Component {
  constructor(props){
    super(props);
    this.state={
      object:[{question:"yo?",category:"hard"}]
    }
  }

  render() {
    return (
      <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Question</th>
          <th>Category</th>
        </tr>
        {this.state.object.map((item,index)=>{
          return(
            <tr key={index}>
              <th>{index+1}</th>
              <th>{item.question}</th>
              <th>{item.category}</th>
            </tr>
          )
        })
        }
      </tbody>
      </table>
    );
  }
}

export default ViewQuestions;