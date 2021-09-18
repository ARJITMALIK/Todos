import React from "react";

export default function footer() {
  let styles = {
    position: 'fixed',
    bottom: '0',
    margin: "0 auto",
    width: "100%",
    
  }
  return (
    <div className="text-center d-flex justify-content-center" style={styles}>
        <p>Copyright ©️ arjitmalik</p>
    </div>
  );
}
