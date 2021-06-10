import React from 'react';
import { Button } from '@material-ui/core'
import './Button.css'

function CustomButton({text,icon}) {
    return (
      <Button className="custom_button" 
      endIcon={icon ? (<div className="btn_icon_container"></div>) : null}>
          <span className="btn_text"></span>
      </Button>
    );
}

export default CustomButton;