import { useState } from 'react';
import ReactiveButton from 'reactive-button';

export default function Button({ idleText = "Submit", onClick }) {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
      if (onClick) {
        onClick();
      }
    }, 1500); 
  };

  return (
    <ReactiveButton
      buttonState={state}
      color="blue"
      size="small"
      idleText={idleText}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}

export function MenuButton({idleText = "Go!"}) {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 1200);
  };

  return (
    <ReactiveButton
      buttonState={state}
      messageDuration="1200"
      size="large"
      idleText={idleText}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}

export function Button2({ idleText = "-", onClick, style = {}, className = "" }) {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
      if (onClick) {
        onClick();
      }
    }, 1500); 
  };

  return (
    <ReactiveButton
      buttonState={state}
      color="red"
      size="small"
      idleText={idleText}
      loadingText="Removing"
      successText="Removed"
      style={{
        transform: 'translateY(-50%)', 
        width: '30px', 
        height: '30px', 
        fontSize: '20px', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        lineHeight: '30px', 
        borderRadius: '0', 
        padding: '0', 
        margin: '0', 
        cursor: 'pointer', 

      }}
      className={className}
      onClick={onClickHandler}
    />
  );
}