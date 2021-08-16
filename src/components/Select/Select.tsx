import * as React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classnames from 'classnames';

import { ChevronDownIcon } from '../icons';
import { SelectItemModal } from './types/selectItemModal';

interface Props {
  selected: SelectItemModal | undefined;
  onSelected: (value: unknown) => void;
  options: SelectItemModal[];
}

export function Select({ options, selected, onSelected }: Props): React.ReactElement<Props> {
  return (
    <Listbox as="div" className="w-full text-base" value={selected} onChange={onSelected}>
      <div className="relative">
        <Listbox.Button className="flex justify-between px-5 items-center w-full py-2 focus:outline-none rounded-[14px] bg-solitude">
          <span className="block truncate">{selected?.name}</span>
          <ChevronDownIcon />
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 w-full overflow-auto shadow focus:outline-none rounded-[14px] bg-solitude mt-1">
            {options.map((item) => (
              <Listbox.Option
                className={({ active }) =>
                  classnames(
                    'px-5 py-1 cursor-pointer  bg-opacity-100',
                    active ? 'bg-coolGray-100 bg-opacity-80' : null,
                  )
                }
                key={item.id}
                value={item}
              >
                {({ selected }) => (
                  <span className={classnames('block truncate', selected ? 'text-primary' : null)}>{item.name}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
