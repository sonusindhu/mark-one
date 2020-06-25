import React from 'react';
import {
  render,
  BoundFunction,
  GetByText,
} from 'test-utils';
import NoteText from '../NoteText';

describe('NoteText', function () {
  let getByText: BoundFunction<GetByText>;
  beforeEach(function () {
    ({ getByText } = render(
      <NoteText>
        * indicates required field
      </NoteText>
    ));
  });
  it('renders', function () {
    getByText('* indicates required field');
  });
});
