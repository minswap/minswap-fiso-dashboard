import * as React from 'react';
import classnames from 'classnames';

import { ExtendableComponentProps } from '../types/overrideableComponent';

type Props = ExtendableComponentProps<'input'>;

export function Checkbox({ className, checked, onChange, ...rest }: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.click();
  }

  return (
    <div
      className={classnames(
        'rounded-lg w-7 h-7 border border-secondary dark:border-white  dark:border-opacity-20 border-opacity-80 relative hover:cursor-pointer transition duration-300',
        checked ? 'border-transparent bg-primary' : '',
        className,
      )}
      onClick={handleClick}
    >
      <input checked={checked} className="hidden" ref={inputRef} type="checkbox" onChange={onChange} {...rest} />
      <svg
        aria-hidden="true"
        className={classnames('text-white transition duration-300', checked ? 'opacity-1' : 'opacity-0')}
        focusable="false"
        height="24"
        viewBox="-2 2 23 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.73 12.91l6.37 6.37L22.79 4.59" fill="none" stroke="currentColor" strokeWidth="2"></path>
      </svg>
    </div>
  );
}
