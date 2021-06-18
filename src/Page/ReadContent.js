import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Epub from './Epub';

const ReadContent = () => {
    const [open, setOpen] = useState(false);


    return(
        <div>
          <button onClick={()=>setOpen(!open)}>이펍</button>
          {open ? <Epub/> : null}
        </div>
    )
}

export default ReadContent;