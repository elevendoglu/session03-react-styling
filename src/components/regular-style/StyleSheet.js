import React from "react"
import "./StyleSheet.css"

const StyleSheet = (props) => {
  const isPrimary = props.btnClass ? "primary" : "secondary"
  return (
    <div >
        <img className="logo" src="http://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" alt="clarusway-logo" />
        <h1 className="header">Welcome to Clarusway</h1>
        {/* <p className="primary">Change your skillset, change your future!</p> */}
        {/* <p className={props.btnClass ? "primary" : "secondary" }>{props.btnName}</p> */}
        <p className={isPrimary}>{props.btnName}</p>

    </div>
  );
}

export default StyleSheet;
