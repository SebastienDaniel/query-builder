import React from 'react';
import { CustomCombobox, IComboboxProps } from '../combobox/combobox';

export interface IFilterRuleComboboxProps extends IComboboxProps {
  readonly focusClassName?: string;
}

export function FilterRuleCombobox(props: IFilterRuleComboboxProps) {
  return <CustomCombobox {...props} openOnFocus />;
}
