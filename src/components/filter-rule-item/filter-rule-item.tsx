import React, { useMemo } from 'react';
import { getFieldDefinitionById } from '../../shared/get-field-definition-by-id';
import { IFilterRule } from '../../types';
import { FilterRuleItemOperator } from './filter-rule-item-operator';
import { FilterRuleItemRemove } from './filter-rule-item-remove';
import { FilterRuleItemValue } from './filter-rule-item-value';
import styles from './filter-rule-item.module.css';

export interface IFilterItemProps {
  readonly filter: IFilterRule;
  readonly onFilterUpdated: (updatedFilter: IFilterRule) => void;
  readonly onFilterRemoved: () => void;
  readonly autoFocusTarget?: 'operator' | 'value';
}

export function FilterRuleItem({
  filter,
  autoFocusTarget,
  onFilterRemoved,
  onFilterUpdated,
}: IFilterItemProps) {
  const fieldDefinition = useMemo(() => getFieldDefinitionById(filter.fieldId), [filter.fieldId]);

  if (!fieldDefinition) {
    return null;
  }

  return (
    <div className={styles.filterRuleItem}>
      <div className={styles.filterRuleItem__filter}>{fieldDefinition?.name}</div>

      <FilterRuleItemOperator
        filter={filter}
        fieldDefinition={fieldDefinition}
        onSubmit={(operator) => onFilterUpdated({ ...filter, operator })}
        autofocus={autoFocusTarget === 'operator'}
      />

      <FilterRuleItemValue
        fieldDefinition={fieldDefinition}
        operator={filter.operator}
        autofocus={autoFocusTarget === 'value'}
        value={filter.value}
        options={fieldDefinition?.options}
        onSubmit={(value) => onFilterUpdated({ ...filter, value })}
      />

      <FilterRuleItemRemove onFilterRemoved={onFilterRemoved} />
    </div>
  );
}
