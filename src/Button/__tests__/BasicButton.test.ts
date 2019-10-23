import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { expect } from 'chai';
import { equal } from 'assert';
import { spy } from 'sinon';
import BasicButton from '../BasicButton';
import { BUTTON } from '../../../../constants';
import * as dummy from '../../../../../../common/__tests__/data/index';

describe('BasicButton', function () {
  let props;
  let wrapper;
  beforeEach(function () {
    props = {
      clickHandler: spy(),
    };
    wrapper = shallow(<BasicButton {...props}>{dummy.string}</BasicButton>);
  });
  afterEach(function () {
    props.clickHandler.resetHistory();
  });
  describe('rendering', function () {
    it('should render component correctly', function () {
      expect(toJson(wrapper)).to.matchSnapshot();
    });
  });
  describe('Click Handling', function () {
    describe('When not disabled', function () {
      beforeEach(function () {
        wrapper.setProps({ disabled: false });
        wrapper.simulate('click');
      });
      it('Should fire the click handler', function () {
        equal(props.clickHandler.callCount, 1);
      });
    });
    describe('When disabled', function () {
      beforeEach(function () {
        wrapper.setProps({ disabled: true });
        wrapper.simulate('click');
      });
      it('Should not fire the click handler', function () {
        equal(props.clickHandler.callCount, 0);
      });
    });
  });
  describe('Conditional classes', function () {
    let button;
    describe('POSITIVE', function () {
      beforeEach(function () {
        wrapper.setProps({ style: BUTTON.POSITIVE });
        button = wrapper.find('button');
      });
      it('Should have a class of button--positive', function () {
        equal(button.hasClass('button--positive'), true);
      });
    });
    describe('NEGATIVE', function () {
      beforeEach(function () {
        wrapper.setProps({ style: BUTTON.NEGATIVE });
        button = wrapper.find('button');
      });
      it('Should have a class of button--negative', function () {
        equal(button.hasClass('button--negative'), true);
      });
    });
    describe('NEUTRAL', function () {
      beforeEach(function () {
        wrapper.setProps({ style: BUTTON.NEUTRAL });
        button = wrapper.find('button');
      });
      it('Should have a class of button--neutral', function () {
        equal(button.hasClass('button--neutral'), true);
      });
    });
    describe('DEFAULT', function () {
      beforeEach(function () {
        wrapper.setProps({ style: BUTTON.DEFAULT });
        button = wrapper.find('button');
      });
      it('Should have a class of button--default', function () {
        equal(button.hasClass('button--default'), true);
      });
    });
    describe('disabled', function () {
      beforeEach(function () {
        wrapper.setProps({ disabled: true });
        button = wrapper.find('button');
      });
      it('Should have a class of button--disabled', function () {
        equal(button.hasClass('button--disabled'), true);
      });
      it('Should be disabled', function () {
        equal(button.props().disabled, true);
      });
    });
    describe('no style value', function () {
      beforeEach(function () {
        wrapper.setProps({});
        button = wrapper.find('button');
      });
      it('should default to button--default', function () {
        equal(button.hasClass('button--default'), true);
      });
    });
  });
});