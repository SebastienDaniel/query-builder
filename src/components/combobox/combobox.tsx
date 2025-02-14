import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import classNames from 'classnames';
import { matchSorter } from 'match-sorter';
import React, { useEffect, useRef, useState } from 'react';
import { COMBOBOX_INPUT_TEST_ID, COMBOBOX_POPOVER_TEST_ID } from '../../test/data-test-ids';
import { Operator } from '../../types';
import styles from './combobox.module.css';

export type IComboboxOption = { id: string; text: string; subtext?: string };

export interface IComboboxProps {
  readonly initialValue?: string;
  readonly inputClassName?: string;
  readonly options: Array<IComboboxOption>;
  readonly openOnFocus?: boolean;
  readonly autofocus?: boolean;
  readonly disabled?: boolean;
  readonly disableFiltering?: boolean;
  readonly placeholder?: string;
  readonly onlyAvailableOptions?: boolean; // TODO: needs to be implemented
  readonly onSubmit: (value: IComboboxOption) => void;
}

export function CustomCombobox({
  options,
  openOnFocus,
  autofocus,
  disabled,
  inputClassName,
  placeholder,
  initialValue,
  disableFiltering,
  onSubmit,
}: IComboboxProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(initialValue ?? '');
  const [width, setWidth] = useState(0);
  const [computedStyles, setComputedStyles] = useState<React.CSSProperties>({});
  const filteredOptions = disableFiltering
    ? options
    : matchSorter(options, value, { keys: ['text'] });

  function handleSelect(text: string) {
    const option = options.find((option) => option.text === text);
    if (option) {
      setValue(option.text);
      onSubmit(option);
    }
  }

  function handleManualChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (e.target.value === '') {
      onSubmit({
        id: `${Operator.OPERATOR_INVALID}`,
        text: '',
        subtext: '',
      });
    }
  }

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const styles = window.getComputedStyle(inputRef.current);
      setComputedStyles({
        lineHeight: styles.lineHeight,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        fontFamily: styles.fontFamily,
        fontStretch: styles.fontStretch,
        paddingLeft: styles.paddingLeft,
        paddingRight: styles.paddingRight,
        borderWidth: styles.borderWidth,
      });
    }
  }, [spanRef.current, inputRef.current]);

  useEffect(() => {
    if (spanRef.current) {
      const scrollWidth = spanRef.current.scrollWidth;
      setWidth(scrollWidth);
    }
  }, [value]);

  return (
    <Combobox openOnFocus={openOnFocus} onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleManualChange}
        disabled={disabled}
        autoFocus={autofocus}
        autocomplete={false}
        // TODO: not a great pattern... this couples FilterList concepts to this component
        className={classNames(styles.combobox__input, inputClassName)}
        tabIndex={0}
        placeholder={placeholder}
        ref={inputRef}
        style={{ width }}
        data-testid={COMBOBOX_INPUT_TEST_ID}
      />
      <span className={styles.inputSizer} style={computedStyles} ref={spanRef}>
        {value}
      </span>
      {filteredOptions.length > 0 && ( // TODO: control visibility based on focus, and an empty state???
        <ComboboxPopover style={{ minWidth: 150 }} data-testid={COMBOBOX_POPOVER_TEST_ID}>
          <ComboboxList>
            {filteredOptions.map((option, index) => (
              <ComboboxOption value={option.text} key={index}>
                {option.text}
              </ComboboxOption>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      )}
    </Combobox>
  );
}
