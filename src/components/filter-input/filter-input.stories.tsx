import { FIELDS } from '../../data-mocks/fields';
import { FilterInput } from './filter-input';

export default {
  title: 'Components/FilterInput',
  component: FilterInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    fields: FIELDS,
    onSubmit: () => null,
  },
};
