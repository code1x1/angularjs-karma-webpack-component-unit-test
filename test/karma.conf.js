const webpack = require('../webpack.common');

// karma.conf.js
module.exports = function(config) {
    config.set({
      basePath: '../src',
      frameworks: ['jasmine'],
      files: [
        { pattern: 'app.ts', watched: false },
        { pattern: 'app.spec.ts', watched: true },
      ],
      preprocessors: {
        'app.ts': [ 'webpack', 'sourcemap' ],
        'app.spec.ts': [ 'webpack', 'sourcemap' ]
      },
      webpack: webpack,    
      browsers: ['Chrome'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser
 
      // you can define custom flags
      customLaunchers: {
        Chrome_without_security: {
          base: 'Chrome',
          flags: ['--disable-web-security', '--disable-site-isolation-trials']
        }
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: false,
      concurrency: Infinity,
      reporters: ['spec']
    //   plugins: [

    //   ]
    });
};