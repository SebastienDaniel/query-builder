import React from 'react';
import { operatorSupportsValue } from '../../shared/operator-supports-value';
import { IFilterRule } from '../../types';
import { FilterRuleItem } from '../filter-rule-item/filter-rule-item';
import styles from './filter-rule-list.module.css';

interface IFilterRuleListProps {
  readonly filters: IFilterRule[];
  readonly removeFilterByIndex: (index: number) => void;
  readonly updateFilterByIndex: (filter: IFilterRule, index: number) => void;
}

export function FilterRuleList({
  filters,
  removeFilterByIndex,
  updateFilterByIndex,
}: IFilterRuleListProps) {
  return (
    <div className={styles.filterRuleList}>
      {filters.map((f, i) => (
        <FilterRuleItem
          key={i}
          filter={f}
          onFilterRemoved={() => removeFilterByIndex(i)}
          onFilterUpdated={(filter) => {
            updateFilterByIndex(filter, i);
          }}
          autoFocusTarget={operatorSupportsValue(f.operator) ? 'value' : 'operator'}
        />
      ))}
    </div>
  );
}
