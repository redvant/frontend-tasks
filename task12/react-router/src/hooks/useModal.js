import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalData, setModalData] = useState({});

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    modalData,
    setModalData,
  }
};

export default useModal;