import '@testing-library/jest-dom';
import { act, cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { FIELDS } from '../../data-mocks/fields';
import { COMBOBOX_INPUT_TEST_ID, COMBOBOX_POPOVER_TEST_ID } from '../../test/data-test-ids';
import { FilterInput } from './filter-input';

describe('Button Component', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const onSubmit = jest.fn();
    render(<FilterInput fields={FIELDS} onSubmit={onSubmit} />);
  });

  // Test 1
  test('Input Rendering', () => {
    const input = screen.getByTestId(COMBOBOX_INPUT_TEST_ID);
    expect(input).toBeInTheDocument();
  });

  // Test 2
  test('Input focus reveals popover', () => {
    const popover1 = screen.queryByTestId(COMBOBOX_POPOVER_TEST_ID);
    expect(popover1).not.toBeInTheDocument();
    const input = screen.getByTestId(COMBOBOX_INPUT_TEST_ID);
    act(() => input.focus());
    const popover2 = screen.getByTestId(COMBOBOX_POPOVER_TEST_ID);
    expect(popover2).toBeInTheDocument();
  });
});
