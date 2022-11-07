import { wrap } from "highcharts";
import React, { useEffect, useState, useRef } from "react";

const BasicModal = ({ children, show, handle }) => {
  const [node, setNode] = useState(null);
  const escapress = useKeyPress("Escape");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handle);

  useEffect(() => {
    if (escapress) handle(false);
  }, [escapress])
  if (!show) return null;
  const onHandleClick = (e) => {
    if (!node.contains(e.target)) handle(false);
  }
  return (
    <div className="modal z-20" onClick={onHandleClick} ref={wrapperRef}>
      <div className="modal-content" ref={Mnode => setNode(Mnode)}>
        {children}
      </div>
    </div>
  )
}

function useOutsideAlerter(ref, handle) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        handle(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
export default BasicModal;