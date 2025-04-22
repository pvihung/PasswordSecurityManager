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