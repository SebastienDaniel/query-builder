import { FieldType, Operator } from '../types';

export function getSupportedOperatorsByFieldType(type: FieldType): Operator[] {
  switch (type) {
    case FieldType.FIELD_TYPE_NUMBER:
      return [
        Operator.OPERATOR_GREATER_THAN,
        Operator.OPERATOR_LESS_THAN,
        Operator.OPERATOR_GREATER_THAN_OR_EQUALS,
        Operator.OPERATOR_LESS_THAN_OR_EQUALS,
        Operator.OPERATOR_EQUALS,
        Operator.OPERATOR_IS_SET,
        Operator.OPERATOR_IS_NOT_SET,
      ];

    case FieldType.FIELD_TYPE_STRING:
      return [
        Operator.OPERATOR_EQUALS,
        Operator.OPERATOR_CONTAINS,
        Operator.OPERATOR_DOES_NOT_CONTAIN,
        Operator.OPERATOR_IS_SET,
        Operator.OPERATOR_IS_NOT_SET,
      ];

    case FieldType.FIELD_TYPE_DATE:
      return [
        Operator.OPERATOR_GREATER_THAN,
        Operator.OPERATOR_LESS_THAN,
        Operator.OPERATOR_GREATER_THAN_OR_EQUALS,
        Operator.OPERATOR_LESS_THAN_OR_EQUALS,
        Operator.OPERATOR_EQUALS,
        Operator.OPERATOR_IS_SET,
        Operator.OPERATOR_IS_NOT_SET,
      ];

    case FieldType.FIELD_TYPE_BOOLEAN:
      return [Operator.OPERATOR_IS_SET, Operator.OPERATOR_IS_NOT_SET];

    case FieldType.FIELD_TYPE_INVALID:
    default:
      return [];
  }
}
