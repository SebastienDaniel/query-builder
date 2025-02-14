import React, { useRef } from 'react';
import { IFilterItemProps } from './filter-rule-item';
import styles from './filter-rule-item.module.css';

export function FilterRuleItemRemove({
  onFilterRemoved,
}: Pick<IFilterItemProps, 'onFilterRemoved'>) {
  const selfRef = useRef(null);

  function handleKeydown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      onFilterRemoved();
    }
  }

  return (
    <div
      className={styles.filterRuleItem__remove}
      onClick={onFilterRemoved}
      tabIndex={0}
      ref={selfRef}
      onKeyDown={handleKeydown}
    >
      x
    </div>
  );
}
