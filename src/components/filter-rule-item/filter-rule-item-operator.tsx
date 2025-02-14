import React from 'react';
import { getOperatorDisplayText } from '../../shared/get-operator-display-text';
import { getSupportedOperatorsByFieldType } from '../../shared/get-supported-operators-by-field-type';
import { IFieldDefinition, IFilterRule, Operator } from '../../types';
import { FilterRuleCombobox } from './filter-rule-combobox';
import styles from './filter-rule-item.module.css';

interface IFilterRuleItemOperatorProps {
  filter: IFilterRule;
  fieldDefinition: IFieldDefinition;
  onSubmit: (operator: Operator) => void;
  autofocus?: boolean;
}
export function FilterRuleItemOperator({
  filter,
  fieldDefinition,
  autofocus,
  onSubmit,
}: IFilterRuleItemOperatorProps) {
  const operators = getSupportedOperatorsByFieldType(fieldDefinition.fieldType);
  const options = operators.map((o) => ({
    id: `${o}`,
    text: getOperatorDisplayText(o),
  }));

  return (
    <div className={styles.filterRuleItem__operator}>
      <FilterRuleCombobox
        options={options}
        onSubmit={(v) => (v ? onSubmit(parseInt(v.id, 10)) : onSubmit(Operator.OPERATOR_INVALID))}
        autofocus={autofocus}
        initialValue={getOperatorDisplayText(filter.operator)}
        disableFiltering
      />
    </div>
  );
}
