/**
 * Detects browser version
 * @return {Object} The new Circle object.
 */
function detectBrowser() {
  let ua = navigator.userAgent;
  let tem;
  let M = ua.match(
    /(opera|chrome|safari|firefox|msie|edge|trident(?=\/))\/?\s*(\d+)/i
  ) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }

  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/);
    if (tem !== null) return 'Opera ' + tem[1];
  }

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

  if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);

  return {
    name: M[0],
    version: M[1],
  };
}

/**
 * Compare current browser version & version from passed array
 * @param {Array} browsers
 * @return {Object} The new Circle object.
 */
function browserVersionIsLeesThanNeeded(
  browsers = defaults.browsers
) {
  let currentBrowser = detectBrowser();
  let name = currentBrowser.name;

  if (browsers.hasOwnProperty(name)) {
    let version = browsers[name];
    return (currentBrowser.version < version);
  } else {
    console.log('browser not found');
    return false;
  }
}

function browserIsDeprecated(browsers) {
  const defaults = {
    browsers: {
      Firefox: 27,
      Chrome: 60,
      Opera: 15,
      IE: 11,
    },
  };

  return browserVersionIsLeesThanNeeded(browsers);
}
