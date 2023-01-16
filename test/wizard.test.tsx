import { render } from '@testing-library/react';
import * as React from 'react';

import { Wizard } from '../src';

const Component = (
  <Wizard>
    <p>step 1</p>
    <p>step 2</p>
  </Wizard>
);

const ComponentWithHeader = (
  <Wizard header={<p>header</p>}>
    <p>step 1</p>
    <p>step 2</p>
  </Wizard>
);

const ComponentWithFooter = (
  <Wizard footer={<p>footer</p>}>
    <p>step 1</p>
    <p>step 2</p>
  </Wizard>
);

const ComponentWithWrapper = (
  <Wizard wrapper={<main />}>
    <p>step 1</p>
    <p>step 2</p>
  </Wizard>
);

describe('Wizard', () => {
  test('should render first step', () => {
    const { queryByText } = render(Component);

    expect(queryByText('step 1')).toBeInTheDocument();
  });

  test('should not render second step', () => {
    const { queryByText } = render(Component);

    expect(queryByText('step 2')).not.toBeInTheDocument();
  });

  test('should render second step with `startIndex`', () => {
    const { queryByText } = render(
      <Wizard startIndex={1}>
        <p>step 1</p>
        <p>step 2</p>
      </Wizard>,
    );

    expect(queryByText('step 2')).toBeInTheDocument();
    expect(queryByText('step 1')).not.toBeInTheDocument();
  });

  test('should render header', () => {
    const { queryByText } = render(ComponentWithHeader);

    expect(queryByText('header')).toBeInTheDocument();
  });

  test('should render footer', () => {
    const { queryByText } = render(ComponentWithFooter);

    expect(queryByText('footer')).toBeInTheDocument();
  });

  test('should render wrapper', () => {
    const { queryByRole } = render(ComponentWithWrapper);

    expect(queryByRole('main')).toBeInTheDocument();
  });
});
