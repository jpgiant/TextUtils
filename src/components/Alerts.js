import React from "react";

function Alerts({ alert }) {
  const captializeMessage = (text) => {
    const updatedText=text.charAt(0).toUpperCase()+text.slice(1)
    return updatedText
  };
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{captializeMessage(alert.type)}</strong>:{alert.msg}
      </div>
    )
  );
}

export default Alerts;
