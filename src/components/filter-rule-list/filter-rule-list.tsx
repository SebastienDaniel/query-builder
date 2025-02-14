import React, { useRef } from 'react';
import { operatorSupportsValue } from '../../shared/operator-supports-value';
import { IFilterRule } from '../../types';
import { FilterRuleItem } from '../filter-rule-item/filter-rule-item';
import styles from './filter-rule-list.module.css';

const FOCUS_CLASS_NAME = 'iCanBeFocused';

interface IFilterRuleListProps {
  readonly filters: IFilterRule[];
  readonly removeFilterByIndex: (index: number) => void;
  readonly updateFilterByIndex: (filter: IFilterRule, index: number) => void;
}

/**
 * A horizontal list of FilterRuleItem components.
 *
 * This component is responsible for:
 * - rendering a list of FilterRuleItem components
 * - handling keyboard navigation (left and right arrow) to move focus between
 *   its children
 */
export function FilterRuleList({
  filters,
  removeFilterByIndex,
  updateFilterByIndex,
}: IFilterRuleListProps) {
  const selfRef = useRef<HTMLDivElement>(null);

  function getFocusTargets() {
    if (selfRef.current) {
      return selfRef.current.querySelectorAll(`.${FOCUS_CLASS_NAME}[tabIndex="0"]`);
    }

    return [];
  }

  function focusNextFocusable() {
    const focusTargets = getFocusTargets() as NodeListOf<HTMLDivElement>;
    const currentFocusElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(focusTargets, currentFocusElement);
    const nextFocusElement = focusTargets[currentIndex + 1];
    nextFocusElement?.focus();
  }

  function focusPreviousFocusable() {
    const focusTargets = getFocusTargets() as NodeListOf<HTMLDivElement>;
    const currentFocusElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(focusTargets, currentFocusElement);
    const previousFocusElement = focusTargets[currentIndex - 1];
    previousFocusElement?.focus();
  }

  function handleKeydown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      focusPreviousFocusable();
    } else if (e.key === 'ArrowRight') {
      focusNextFocusable();
    }
  }

  return (
    <div ref={selfRef} onKeyDown={handleKeydown} className={styles.filterRuleList}>
      {filters.map((f, i) => (
        <FilterRuleItem
          key={i}
          focusClassName={FOCUS_CLASS_NAME}
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
