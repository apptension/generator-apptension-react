import inRange from 'lodash/inRange';

const TABLET_WIDTH = 768;

const platform = {
  isMobile: function () {
    const windowWidth = platform.getWindowWidth();
    return inRange(windowWidth, 0, TABLET_WIDTH);
  },
  isTablet: function () {
    return platform.getWindowWidth() >= TABLET_WIDTH;
  },
  getWindowWidth: function () {
    return window.innerWidth;
  }
};

export default platform;
