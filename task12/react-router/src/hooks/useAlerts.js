import { useState } from "react";

const useAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  function addAlert(alert) {
    setAlerts((previousState) => [...previousState, alert]);
    setTimeout(removeAlert, 3000);
  }

  function removeAlert() {
    setAlerts((previousState) => previousState.slice(1));
  }

  return {
    alerts,
    addAlert,
  };
};

export default useAlerts;
