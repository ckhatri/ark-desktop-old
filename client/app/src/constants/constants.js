;(function () {
  'use strict'

  const ONE_SECOND = 1000
  const ONE_MINUTE = ONE_SECOND * 60
  const ONE_HOUR = ONE_MINUTE * 60
  const ONE_DAY = ONE_HOUR * 24
  const ONE_YEAR = ONE_DAY * 365

  angular.module('arkclient.constants')
    // 1 ARK has 100000000 "arktoshi"
    .constant('ARKTOSHI_UNIT', Math.pow(10, 8))
    .constant('TIME', {
      ONE_SECOND: ONE_SECOND,
      ONE_MINUTE: ONE_MINUTE,
      ONE_HOUR: ONE_HOUR,
      ONE_DAY: ONE_DAY,
      ONE_YEAR = ONE_YEAR
    })
})()
