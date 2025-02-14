export enum FieldType {
  FIELD_TYPE_INVALID,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_NUMBER,
  FIELD_TYPE_DATE,
  FIELD_TYPE_STRING,
}

export enum Operator {
  OPERATOR_INVALID,
  OPERATOR_GREATER_THAN,
  OPERATOR_LESS_THAN,
  OPERATOR_GREATER_THAN_OR_EQUALS,
  OPERATOR_LESS_THAN_OR_EQUALS,
  OPERATOR_EQUALS,
  OPERATOR_CONTAINS,
  OPERATOR_DOES_NOT_CONTAIN,
  OPERATOR_IS_SET,
  OPERATOR_IS_NOT_SET,
}

export interface IFieldDefinition {
  readonly id: string;
  readonly name: string;
  readonly fieldType: FieldType;
  readonly isUserDefined: boolean;
  readonly options: Array<IFieldOption>;
  readonly defaultRule?: IFilterRule;
}

export enum ObjectType {
  OBJECT_TYPE_INVALID,
  OBJECT_TYPE_STAGE,
  OBJECT_TYPE_TAG,
}

export interface IFieldOption {
  readonly id: string;
  readonly text: string;
  readonly objectType?: ObjectType;
}

export interface IFilterRule {
  readonly fieldId: string;
  readonly operator: Operator;
  readonly value: string;
}
