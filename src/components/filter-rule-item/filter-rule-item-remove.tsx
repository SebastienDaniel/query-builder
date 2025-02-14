import React from 'react';
import { IFilterItemProps } from './filter-rule-item';
import styles from './filter-rule-item.module.css';

export function FilterRuleItemRemove({
  onFilterRemoved,
}: Pick<IFilterItemProps, 'onFilterRemoved'>) {
  function handleKeydown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === 'Backspace') {
      onFilterRemoved();
    }
  }

  return (
    <div
      className={styles.filterRuleItem__remove}
      onClick={onFilterRemoved}
      tabIndex={0}
      onKeyDown={handleKeydown}
    >
      x
    </div>
  );
}
