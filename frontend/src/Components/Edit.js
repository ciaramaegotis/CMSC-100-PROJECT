import React, { Component } from 'react';

import Button from './Button';
class Edit extends Component {
  render() {
    return (
      <div>
        EDIT
        <Button className="ui button" value={"AddQuestion"} onClick={()=>{window.location+="/add-question"}}/>
      </div>
    );
  }
}

export default Edit;
