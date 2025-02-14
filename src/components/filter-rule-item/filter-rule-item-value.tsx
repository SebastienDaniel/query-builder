import React from 'react';
import { operatorSupportsValue } from '../../shared/operator-supports-value';
import { FieldType, IFieldDefinition, Operator } from '../../types';
import { ResizableInput } from '../resizable-input/resizable-input';
import { FilterRuleCombobox, IFilterRuleComboboxProps } from './filter-rule-combobox';
import styles from './filter-rule-item.module.css';

interface IFilterRuleItemValueProps {
  fieldDefinition: IFieldDefinition;
  operator: Operator;
  value: string;
  options?: IFieldDefinition['options'];
  autofocus?: boolean;
  onSubmit: (value: string) => void;
}

export function FilterRuleItemValue({
  fieldDefinition,
  operator,
  autofocus,
  value,
  options,
  onSubmit,
}: IFilterRuleItemValueProps) {
  if (!operatorSupportsValue(operator)) {
    return null;
  }

  let InputComponent: React.ReactNode = null;
  if ((options?.length ?? 0) > 0) {
    InputComponent = (
      <InputCombobox
        options={fieldDefinition.options.map((o) => ({
          id: o.id,
          text: o.text,
        }))}
        fieldDefinition={fieldDefinition}
        onSubmit={(v) => onSubmit(v.id)}
        autofocus={autofocus}
        initialValue={value}
      />
    );
  } else {
    if (fieldDefinition.fieldType === FieldType.FIELD_TYPE_STRING) {
      InputComponent = (
        <ResizableInput
          tabIndex={0}
          autoFocus={autofocus}
          value={value}
          type='text'
          onChange={(e) => onSubmit(e.target.value)}
        />
      );
    } else if (fieldDefinition.fieldType === FieldType.FIELD_TYPE_NUMBER) {
      InputComponent = (
        <ResizableInput
          tabIndex={0}
          autoFocus={autofocus}
          type='number'
          value={value}
          onChange={(e) => onSubmit(e.target.value)}
        />
      );
    }
  }

  return <div className={styles.filterRuleItem__value}>{InputComponent}</div>;
}

function InputCombobox({
  fieldDefinition,
  ...props
}: IFilterRuleComboboxProps & {
  fieldDefinition: IFieldDefinition;
}) {
  return (
    <FilterRuleCombobox
      {...props}
      disableFiltering
      onSubmit={(v) => {
        const option = fieldDefinition.options.find((o) => o.id === v.id);
        if (option) {
          props.onSubmit(option);
        }
      }}
    />
  );
}
