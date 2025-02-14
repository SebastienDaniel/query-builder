import { Operator } from '../types';

export function getOperatorDisplayText(operator: Operator) {
  switch (operator) {
    case Operator.OPERATOR_GREATER_THAN:
      return '>';
    case Operator.OPERATOR_LESS_THAN:
      return '<';
    case Operator.OPERATOR_GREATER_THAN_OR_EQUALS:
      return '>=';
    case Operator.OPERATOR_LESS_THAN_OR_EQUALS:
      return '<=';
    case Operator.OPERATOR_EQUALS:
      return '=';
    case Operator.OPERATOR_CONTAINS:
      return 'contains';
    case Operator.OPERATOR_DOES_NOT_CONTAIN:
      return 'does not contain';
    case Operator.OPERATOR_IS_SET:
      return 'is set';
    case Operator.OPERATOR_IS_NOT_SET:
      return 'is not set';
    case Operator.OPERATOR_INVALID:
    default:
      return '';
  }
}
