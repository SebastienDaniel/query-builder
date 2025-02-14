import debugFactory from 'debug';
import React, { useCallback, useState } from 'react';
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
  const fields = FIELDS;

  return (
    <div className={styles.container}>
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
