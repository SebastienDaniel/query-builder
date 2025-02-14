import { Operator } from '../../types';
import { FilterRuleItem } from './filter-rule-item';

export default {
  title: 'Components/FilterRuleItem',
  component: FilterRuleItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    filter: {
      fieldId: 'contact_type',
      operator: Operator.OPERATOR_EQUALS,
      value: 'value',
    },
    onFilterRemoved: () => window.alert('deleted'),
  },
};

export const Valueless = {
  args: {
    filter: {
      fieldId: 'contact_type',
      operator: Operator.OPERATOR_IS_SET,
      value: 'value',
    },
  },
};

export const LongValue = {
  args: {
    filter: {
      fieldId: 'free_form',
      operator: Operator.OPERATOR_EQUALS,
      value: 'This is a very long value that we want to ellipsis',
    },
  },
};
