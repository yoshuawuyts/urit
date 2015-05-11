const test = require('tape')
const urit = require('./')

test('should use default values', function (t) {
  t.plan(1)
  const parse = urit()
  t.equal(parse(), '')
})

test('should expand templates', function (t) {
  t.plan(1)
  const expand = urit('{?query*}')
  t.equal(expand({query: {first: 1, second: 2}}), '?first=1&second=2')
})
