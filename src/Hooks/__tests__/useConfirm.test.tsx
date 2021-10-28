import { renderHook, act, RenderResult } from '@testing-library/react-hooks';
import { stub, SinonStub } from 'sinon';
import { strictEqual } from 'assert';
import { useConfirm, UseConfirmFunctions } from '../useConfirm';

describe('useConfirm Hook', function () {
  let result: RenderResult<UseConfirmFunctions>;
  beforeEach(function () {
    ({ result } = renderHook(() => useConfirm()));
  });
  describe('confirmDiscard', function () {
    let confirmStub: SinonStub;
    beforeEach(function () {
      confirmStub = stub(window, 'confirm');
    });
    context('When markAsChanged has been called with true', function () {
      beforeEach(function () {
        act(() => {
          result.current.markAsChanged(true);
        });
      });
      context('When window.confirm returns true', function () {
        beforeEach(function () {
          confirmStub.returns(true);
        });
        it('returns true', function () {
          const discard = result.current.confirmDiscard();
          strictEqual(confirmStub.callCount, 1);
          strictEqual(discard, true);
        });
      });
      context('When window.confirm returns false', function () {
        beforeEach(function () {
          confirmStub.returns(false);
        });
        it('returns false', function () {
          const discard = result.current.confirmDiscard();
          strictEqual(confirmStub.callCount, 1);
          strictEqual(discard, false);
        });
      });
      context('When markAsChanged is later called with false', function () {
        beforeEach(function () {
          act(() => {
            result.current.markAsChanged(false);
          });
        });
        it('Should not call window.confirm and should return true', function () {
          const discard = result.current.confirmDiscard();
          strictEqual(confirmStub.callCount, 0);
          strictEqual(discard, true);
        });
      });
    });
    context('When markAsChanged has NOT been called', function () {
      it('Should always return true', function () {
        const discard = result.current.confirmDiscard();
        strictEqual(confirmStub.callCount, 0);
        strictEqual(discard, true);
      });
    });
  });
});
