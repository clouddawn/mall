module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['app-tab-bar','tabbar-item'],
      minPixelValue: 2,
      mediaQuery: false,
      replace: true,
      exclude: [/Tabbar/],
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}
