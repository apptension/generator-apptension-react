import {expect} from 'chai';
import platform from '../index';
import sinon from 'sinon';

describe('platform', () => {
  it('should be an object', () => {
    expect(platform).to.be.an('object');
  });

  describe('isMobile', () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      expect(platform.isMobile).to.be.a('function');
    });

    it('should return true for mobile devices', () => {
      sandbox.stub(platform, 'getWindowWidth', () => 320);

      expect(platform.isMobile()).to.equal(true);
    });

    it('should return false for non mobile devices', () => {
      sandbox.stub(platform, 'getWindowWidth', () => 768);

      expect(platform.isMobile()).to.equal(false);
    });
  });

  describe('isTablet', () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should be a function', () => {
      expect(platform.isMobile).to.be.a('function');
    });

    it('should return false for mobile devices', () => {
      sandbox.stub(platform, 'getWindowWidth', () => 767);

      expect(platform.isTablet()).to.equal(false);
    });

    it('should return true for non mobile devices', () => {
      sandbox.stub(platform, 'getWindowWidth', () => 768);

      expect(platform.isTablet()).to.equal(true);
    });
  });

  describe('getWindowWidth', () => {
    it('should be a function', () => {
      expect(platform.getWindowWidth).to.be.a('function');
    });
  });
});
