import React from "react";

function Alerts({ alert }) {
  const captializeMessage = (text) => {
    const updatedText = text.charAt(0).toUpperCase() + text.slice(1);
    return updatedText;
  };
  return (
    <div style={{height: '50px'}}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{captializeMessage(alert.type)}</strong>:{alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alerts;
