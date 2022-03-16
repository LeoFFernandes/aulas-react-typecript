import React from 'react';
import './input.css'

interface IInputLoginProps {
  label: string;
  value: string;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label className ="label-input">
      <span className ="span-input">{props.label}</span>
      <input
        className ="input"
        ref ={ref} 
        value={props.value}
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter()
            : undefined
        }
      />
    </label>
  );
});
