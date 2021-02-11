import { Button } from 'Buttons';
import { Form, TextInput } from 'Forms';
import React from 'react';
import {
  render,
  BoundFunction,
  GetByRole,
} from 'test-utils';
import { VARIANT } from 'Theme';

describe('Form', function () {
  let getByRole: BoundFunction<GetByRole>;
  const formLabel = 'New Student Registration Form';
  beforeEach(function () {
    ({ getByRole } = render(
      <Form
        id="testForm"
        label={formLabel}
      >
        <TextInput
          id="testSemester"
          name="semester"
          value="Spring"
          errorMessage="Error: Please enter a valid ID"
          label="semester"
          onChange={() => {}}
        />
        <Button
          onClick={() => {}}
          variant={VARIANT.BASE}
        >
          Submit
        </Button>
      </Form>
    ));
  });
  it('renders', function () {
    getByRole('form');
  });
});
