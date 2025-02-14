import { CustomCombobox } from './combobox';

export default {
  title: 'Components/Combobox',
  component: CustomCombobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const options = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Kiwi'].map((o) => ({
  id: o.toLowerCase(),
  text: o,
}));
export const Basic = {
  args: {
    options,
    openOnFocus: true,
    onSubmit: () => null,
  },
};

export const Autofocus = {
  args: {
    options,
    openOnFocus: true,
    onSubmit: () => null,
    autofocus: true,
  },
};
