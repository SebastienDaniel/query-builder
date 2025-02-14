import classNames from 'classnames';
import React, { useRef } from 'react';
import { IFilterItemProps } from './filter-rule-item';
import styles from './filter-rule-item.module.css';

export function FilterRuleItemRemove({
  onFilterRemoved,
  focusClassName,
}: Pick<IFilterItemProps, 'onFilterRemoved' | 'focusClassName'>) {
  const selfRef = useRef(null);

  function handleKeydown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      onFilterRemoved();
    }
  }

  return (
    <div
      className={classNames(styles.filterRuleItem__remove, focusClassName)}
      onClick={onFilterRemoved}
      tabIndex={0}
      ref={selfRef}
      onKeyDown={handleKeydown}
    >
      x
    </div>
  );
}
