import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import classNames from 'classnames';
import { matchSorter } from 'match-sorter';
import React, { useState } from 'react';
import { getFieldTypeDefaultOperator } from '../../shared/get-field-type-default-operator';
import { COMBOBOX_INPUT_TEST_ID, COMBOBOX_POPOVER_TEST_ID } from '../../test/data-test-ids';
import { IFieldDefinition, IFilterRule } from '../../types';
import styles from './filter-input.module.css';

interface IFilterInputProps {
  readonly fields: IFieldDefinition[];
  readonly placeholder?: string;
  readonly focusClassName?: string;
  readonly onSubmit: (filter: IFilterRule) => void;
}

// filterInput
// uses a combination of CustomCombobox to sequentially
// capture the parts of a FilterRule, which requires a filter, an operator and optionally a value
// we can determine from the FilterType if a value is required
// once all parts are captured, we can pass the filter as a IFilterRule to the parent component

export function FilterInput({ fields, onSubmit, placeholder, focusClassName }: IFilterInputProps) {
  const [value, setValue] = useState('');
  const filteredFields = matchSorter(fields, value, { keys: ['name'] });

  function onFieldSelected(field: IFieldDefinition) {
    if (field.defaultRule) {
      onSubmit(field.defaultRule);
    } else {
      onSubmit({
        fieldId: field.id,
        operator: getFieldTypeDefaultOperator(field.fieldType),
        value: '',
      });
    }
  }

  function handleSelect(id: string): void {
    const field = fields.find((field) => field.id === id);
    if (field) {
      onFieldSelected(field);
    }

    setValue('');
  }

  return (
    <div className={styles.filterInput}>
      <Combobox openOnFocus onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          autocomplete={false}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(focusClassName, styles.filterInput__input)}
          tabIndex={0}
          placeholder={placeholder}
          data-testid={COMBOBOX_INPUT_TEST_ID}
        />
        {filteredFields.length > 0 && (
          <ComboboxPopover data-testid={COMBOBOX_POPOVER_TEST_ID}>
            <ComboboxList>
              {filteredFields.map((field, index) => (
                <ComboboxOption value={field.id} key={index}>
                  {field.name}
                </ComboboxOption>
              ))}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
}
