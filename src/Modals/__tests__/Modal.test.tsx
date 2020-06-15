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
  describe('open/close handlers', function () {
    let onOpenStub: SinonSpy;
    let onCloseStub: SinonSpy;
    let closeHandlerStub: SinonStub;
    let ModalOpener: FunctionComponent;
    beforeEach(function () {
      onOpenStub = spy();
      onCloseStub = spy();
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
              onOpen={onOpenStub}
              onClose={onCloseStub}
              closeHandler={closeHandlerStub}
            >
              Contents
            </Modal>
          </div>
        );
      };
    });
    context('When the modal changes from closed to open', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
      });
      it('Should call the onOpen handler', function () {
        strictEqual(onOpenStub.callCount, 1);
      });
      it('Should not call the onClose handler', function () {
        strictEqual(onCloseStub.callCount, 0);
      });
    });
    context('When the modal is open and is unmounted', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        fireEvent.click(getByText('Toggle Modal'));
        onOpenStub.resetHistory();
        onCloseStub.resetHistory();
        cleanup();
      });
      it('Should not call the onOpen handler', function () {
        strictEqual(onOpenStub.callCount, 0);
      });
      it('Should call the onClose handler', function () {
        strictEqual(onCloseStub.callCount, 1);
      });
    });
    context('When the modal changes from open to closed', function () {
      beforeEach(function () {
        const { getByText } = render(<ModalOpener />);
        const toggleButton = getByText('Toggle Modal');
        fireEvent.click(toggleButton);
        onOpenStub.resetHistory();
        onCloseStub.resetHistory();
        fireEvent.click(toggleButton);
      });
      it('Should not call the onOpen handler', function () {
        strictEqual(onOpenStub.callCount, 0);
      });
      it('Should call the onClose handler', function () {
        strictEqual(onCloseStub.callCount, 1);
      });
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
