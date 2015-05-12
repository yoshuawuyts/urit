const uritemplate = require('uritemplate')

module.exports = parse

// parse a uri template
// str -> str
function parse (tmpl) {
  tmpl = tmpl || ''
  const parser = uritemplate.parse(tmpl)

  return function expand (params) {
    params = params || {}
    return parser.expand(params)
  }
}
