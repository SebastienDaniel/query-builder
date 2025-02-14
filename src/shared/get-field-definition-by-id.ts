import { FIELDS } from '../data-mocks/fields';

export function getFieldDefinitionById(id: string) {
  return FIELDS.find((field) => field.id === id);
}
