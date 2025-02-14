import debugFactory from 'debug';
import React, { useCallback, useState } from 'react';
import { FilterInput } from '../components/filter-input/filter-input';
import { FilterRuleList } from '../components/filter-rule-list/filter-rule-list';
import { FIELDS } from '../data-mocks/fields';
import { IFilterRule } from '../types';
import styles from './container.module.css';

const debug = debugFactory('Container');

interface IContainerProps {
  readonly initialFilterRules?: Array<IFilterRule>;
}

export function Container({ initialFilterRules }: IContainerProps) {
  const fields = FIELDS;
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
