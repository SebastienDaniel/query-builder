import classNames from 'classnames';
import React from 'react';
import { CustomCombobox, IComboboxProps } from '../combobox/combobox';
import styles from './filter-rule-item.module.css';

export interface IFilterRuleComboboxProps extends IComboboxProps {
  focusClassName?: string;
}

export function FilterRuleCombobox(props: IFilterRuleComboboxProps) {
  return (
    <CustomCombobox
      {...props}
      openOnFocus
      inputClassName={classNames(styles.filterRuleItem__combobox, props.focusClassName)}
    />
  );
}
