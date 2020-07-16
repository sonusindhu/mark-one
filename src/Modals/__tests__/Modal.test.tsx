import React, { useState, FunctionComponent } from 'react';
import { strictEqual } from 'assert';
import {
  spy, stub, SinonSpy, SinonStub,
} from 'sinon';
import { render, fireEvent, cleanup } from 'test-utils';
import Modal from 'Modals/Modal';

describe('Modal', function () {
  describe('isVisible prop', function () {
    context('When isVisible is false', function () {
      it('Should not render any visible content', function () {
        const { queryByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible={false}
          >
            hidden
          </Modal>
        );
        const modal = queryByText('hidden');
        // strictEqual(modal, null) was causing an OOM crash when the test
        // failed, but this works fine
        strictEqual(modal === null, true);
      });
    });
    context('When isVisible is true', function () {
      it('Should render visible content', function () {
        const { getByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible
          >
            displayed
          </Modal>
        );
        const modal = getByText('displayed');
        strictEqual(modal === null, false);
      });
      it('Should have the specified value for the property aria-labelledBy', function () {
        const { getByText } = render(
          <Modal
            ariaLabelledBy="facultyEditButton"
            isVisible
          >
            displayed
          </Modal>
        );
        const modal = getByText('displayed');
        strictEqual(modal.getAttribute('aria-labelledBy'), 'facultyEditButton');
      });
    });
  });
  describe('closeHandler', function () {
    let closeHandlerStub: SinonStub;
    let ModalOpener: FunctionComponent;
    beforeEach(function () {
      closeHandlerStub = stub();
      ModalOpener = () => {
        const [modalOpen, setModalOpen] = useState(false);
        return (
          <div>
            <button
              type="button"
              onClick={() => { setModalOpen(!modalOpen); }}
            >
              Toggle Modal
            </button>
            <Modal
              ariaLabelledBy="facultyEditButton"
              isVisible={modalOpen}
              closeHandler={closeHandlerStub}
            >
              Contents
            </Modal>
          </div>
        );
      };
    });
    context('When the backdrop is clicked', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        const backdrop = document.querySelector('.modal-fade-enter');
        fireEvent.click(backdrop);
      });
      it('Should call the closeHandler', function () {
        strictEqual(closeHandlerStub.callCount, 1);
      });
    });
    context('When the modal is clicked', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        fireEvent.click(getByText('Contents'));
      });
      it('Should not call the closeHandler', function () {
        strictEqual(closeHandlerStub.callCount, 0);
      });
    });
  });
});
