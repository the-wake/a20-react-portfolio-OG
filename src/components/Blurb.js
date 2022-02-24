import React from 'react';
import image from '../assets/at.png'

function Blurb() {
  return (
    <div className="container blurb">
      <div className="row">
        <div className="col-6 ">
          <img src={image} id="profile-pic"/>
        </div>
        <div className="col-6">
          <p>
            This is where the blurb goes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blurb;
