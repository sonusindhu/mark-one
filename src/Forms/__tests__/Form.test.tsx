import { Button } from 'Buttons';
import { Form, TextInput } from 'Forms';
import React from 'react';
import {
  render,
  BoundFunction,
  GetByText,
} from 'test-utils';
import { VARIANT } from 'Theme';

describe('Form', function () {
  let getByText: BoundFunction<GetByText>;
  const errorMessage = 'Error: Please enter a valid ID';
  beforeEach(function () {
    ({ getByText } = render(
      <Form id="testForm">
        <TextInput
          id="testSemester"
          name="semester"
          value="Spring"
          errorMessage={errorMessage}
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
    getByText(errorMessage);
  });
});
