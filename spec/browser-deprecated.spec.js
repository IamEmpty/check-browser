describe('Browser detection', () => {
  const detectBrowser = require('../src/browser-deprecated');

  it('should be able to detect a browser', () => {
    const userAgents = {
      chrome: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.94 Safari/537.36`,

      firefox: `Mozilla/5.0 
        (Windows NT 10.0; Win64; x64; rv:57.0) 
        Gecko/20100101 Firefox/57.0`,

      edge: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063`,

      opera: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.89 Safari/537.36 OPR/49.0.2725.39`,

      ie: `Mozilla/5.0 (Windows NT 10.0; WOW64; 
        Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
        .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,

      safari: `Mozilla/5.0 (Macintosh; 
        Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) 
        Version/11.0.1 Safari/604.3.5`,
    };

    expect(detectBrowser(userAgents.chrome)).toEqual({
      name: 'Chrome',
      version: 62,
    });

    expect(detectBrowser(userAgents.firefox)).toEqual({
      name: 'Firefox',
      version: 57,
    });

    expect(detectBrowser(userAgents.edge)).toEqual({
      name: 'Edge',
      version: 15,
    });

    expect(detectBrowser(userAgents.opera)).toEqual({
      name: 'Opera',
      version: 49,
    });

    expect(detectBrowser(userAgents.ie)).toEqual({
      name: 'IE',
      version: 11,
    });

    expect(detectBrowser(userAgents.safari)).toEqual({
      name: 'Safari',
      version: 11,
    });
  });
});