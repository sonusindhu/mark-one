import { Button } from 'Buttons';
import { Form, TextInput } from 'Forms';
import React from 'react';
import {
  render,
  BoundFunction,
  GetByBoundAttribute,
} from 'test-utils';
import { VARIANT } from 'Theme';

describe('Form', function () {
  let getByTestId: BoundFunction<GetByBoundAttribute>;
  const formTestId = 'testForm';
  beforeEach(function () {
    ({ getByTestId } = render(
      <Form
        id="testForm"
        dataTestId={formTestId}
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
    getByTestId(formTestId);
  });
});
