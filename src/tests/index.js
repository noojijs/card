import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';
import { expect } from 'chai';
// import sinon from 'sinon';
const { describe, it } = global;

describe('Card', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<Card>{text}</Card>);
    expect(wrapper.text()).to.be.equal(text);
  });
});
