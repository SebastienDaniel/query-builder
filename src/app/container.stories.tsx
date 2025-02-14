import { IFilterRule, Operator } from '../types';
import { Container } from './container';

export default {
  title: 'App',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const LotsOfFilters = {
  args: {
    initialFilterRules: [
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
      {
        fieldId: 'contact_type',
        operator: Operator.OPERATOR_EQUALS,
        value: 'partner',
      },
    ] as IFilterRule[],
  },
};
