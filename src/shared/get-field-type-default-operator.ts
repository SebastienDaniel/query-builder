import { FieldType, Operator } from '../types';

export function getFieldTypeDefaultOperator(fieldType: FieldType): Operator {
  switch (fieldType) {
    case FieldType.FIELD_TYPE_BOOLEAN:
      return Operator.OPERATOR_IS_SET;

    case FieldType.FIELD_TYPE_STRING:
      return Operator.OPERATOR_EQUALS;

    case FieldType.FIELD_TYPE_NUMBER:
      return Operator.OPERATOR_GREATER_THAN;

    case FieldType.FIELD_TYPE_DATE:
      return Operator.OPERATOR_GREATER_THAN;

    default:
      return Operator.OPERATOR_INVALID;
  }
}
