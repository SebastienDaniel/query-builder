import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { matchSorter } from 'match-sorter';
import React, { useState } from 'react';
import { getFieldTypeDefaultOperator } from '../../shared/get-field-type-default-operator';
import { COMBOBOX_INPUT_TEST_ID, COMBOBOX_POPOVER_TEST_ID } from '../../test/data-test-ids';
import { IFieldDefinition, IFilterRule } from '../../types';
import styles from './filter-input.module.css';

interface IFilterInputProps {
  readonly fields: IFieldDefinition[];
  readonly placeholder?: string;
  readonly onSubmit: (filter: IFilterRule) => void;
}

/**
 * FilterInput is a component that provides a search and selection interface
 * for filtering fields. It uses a combobox input to allow users to type and
 * search for specific fields from a given list. Upon selection, it triggers
 * the onSubmit callback with the selected field's default rule or constructs
 * a rule using the field's default operator if no default rule is provided.
 *
 */
export function FilterInput({ fields, onSubmit, placeholder }: IFilterInputProps) {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          className={styles.filterInput__input}
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
