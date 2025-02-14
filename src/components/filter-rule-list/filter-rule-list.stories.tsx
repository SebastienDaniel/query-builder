import { Operator } from '../../types';
import { FilterRuleList } from './filter-rule-list';

export default {
  title: 'Components/FilterRuleList',
  component: FilterRuleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Empty = {
  args: {
    filters: [],
  },
};

export const Single = {
  args: {
    filters: [
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'value',
      },
    ],
  },
};

export const Multi = {
  args: {
    filters: [
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'value',
      },
      {
        fieldId: 'lead_source',
        operator: Operator.OPERATOR_EQUALS,
        value: 'value',
      },
      {
        fieldId: 'value_estimate',
        operator: Operator.OPERATOR_GREATER_THAN,
        value: '',
      },
    ],
  },
};
