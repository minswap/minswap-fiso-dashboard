import * as React from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import classnames from 'classnames';

import { MincatSwitchIcon } from '../icons';
import { Styleable } from '../types/styleable';

interface Props extends Styleable {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export function Switch({ isChecked, onChange, className }: Props): React.ReactElement<Props> {
  return (
    <HeadlessSwitch
      checked={isChecked}
      className={classnames(
        'relative inline-flex items-center h-12 rounded-3xl w-22 focus:outline-none border-2 border-transparent transition-colors ease-in-out duration-200',
        isChecked ? 'bg-primary' : 'bg-solitude',
        className,
      )}
      onChange={onChange}
    >
      <MincatSwitchIcon
        className={classnames(
          'inline-block w-11 h-11 transform rounded-full',
          isChecked ? 'translate-x-10' : 'translate-x-0',
        )}
      />
    </HeadlessSwitch>
  );
}
