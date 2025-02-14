import debugFactory from 'debug';
import React, { useCallback, useRef, useState } from 'react';
import { FilterInput } from '../components/filter-input/filter-input';
import { FilterRuleList } from '../components/filter-rule-list/filter-rule-list';
import { FIELDS } from '../data-mocks/fields';
import { IFilterRule } from '../types';
import styles from './container.module.css';

interface IContainerProps {
  readonly initialFilterRules?: Array<IFilterRule>;
}

export function Container(props: IContainerProps) {
  const { filters, addFilterRule, removeFilterByIndex, updateFilterByIndex } = useFilters(props);
  const selfRef = useRef<HTMLDivElement>(null);
  const fields = FIELDS;

  function getFocusTargets() {
    if (selfRef.current) {
      return selfRef.current.querySelectorAll(`[tabIndex="0"]`);
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

  function onKeydown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      focusPreviousFocusable();
    } else if (e.key === 'ArrowRight') {
      focusNextFocusable();
    }
  }

  return (
    <div className={styles.container} onKeyDown={onKeydown} ref={selfRef}>
      <label className={styles.container__label}>Filters</label>
      <FilterRuleList
        filters={filters}
        removeFilterByIndex={removeFilterByIndex}
        updateFilterByIndex={updateFilterByIndex}
      />
      <FilterInput
        fields={fields}
        onSubmit={addFilterRule}
        placeholder={filters.length === 0 ? 'Add a filter...' : ''}
      />
    </div>
  );
}

const debug = debugFactory('useFilters');
function useFilters({ initialFilterRules }: IContainerProps) {
  const [filters, setFilters] = useState<IFilterRule[]>(initialFilterRules ?? []);

  const addFilterRule = useCallback((filterRule: IFilterRule) => {
    debug('addFilterRule', filterRule);
    setTimeout(() => {
      setFilters((prev) => prev.concat(filterRule));
    }, 10);
  }, []);

  const removeFilterByIndex = useCallback((index: number) => {
    debug('removeFilterByIndex', index);
    setFilters((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateFilterByIndex = useCallback((filter: IFilterRule, index: number) => {
    debug('updateFilterByIndex', filter, index);
    setFilters((prev) => prev.map((f, i) => (i === index ? filter : f)));
  }, []);

  return {
    filters,
    addFilterRule,
    removeFilterByIndex,
    updateFilterByIndex,
  };
}
