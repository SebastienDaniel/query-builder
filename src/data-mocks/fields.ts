import { IFieldDefinition, FieldType, Operator } from "../types";

export const FIELDS: IFieldDefinition[] = [
  {
    id: "contact_type",
    name: "Contact type",
    isUserDefined: false,
    fieldType: FieldType.FIELD_TYPE_STRING,
    options: [
      {
        id: "customer",
        text: "Customer",
      },
      {
        id: "prospect",
        text: "Prospect",
      },
      {
        id: "partner",
        text: "Partner",
      },
      {
        id: "vendor",
        text: "Vendor",
      },
    ],
    defaultRule: {
      fieldId: "contact_type",
      operator: Operator.OPERATOR_EQUALS,
      value: "",
    },
  },
  {
    id: "lead_source",
    name: "Lead source",
    isUserDefined: false,
    fieldType: FieldType.FIELD_TYPE_STRING,
    options: [
      {
        id: "sem",
        text: "Search Engine Marketing (SEM)",
      },
      {
        id: "organic",
        text: "organic",
      },
      {
        id: "events",
        text: "events",
      },
    ],
    defaultRule: {
      fieldId: "lead_source",
      operator: Operator.OPERATOR_EQUALS,
      value: "",
    },
  },
  {
    id: "value_estimate",
    name: "Value Estimate",
    isUserDefined: false,
    fieldType: FieldType.FIELD_TYPE_NUMBER,
    options: [],
    defaultRule: {
      fieldId: "value_estimate",
      operator: Operator.OPERATOR_GREATER_THAN,
      value: "",
    },
  },
  {
    id: "free_form",
    name: "Free form",
    isUserDefined: false,
    fieldType: FieldType.FIELD_TYPE_STRING,
    options: [],
  },
];
