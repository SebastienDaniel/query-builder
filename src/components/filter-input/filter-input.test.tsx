import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { FIELDS } from '../../data-mocks/fields';
import { COMBOBOX_INPUT_TEST_ID } from '../../test/data-test-ids';
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
});
