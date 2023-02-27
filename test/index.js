const decimal = require('../dist/index').default;

var assert = require('assert');
describe('decimal',function(){
  it('decimal(2) format(1.222) return 1.22',function(){
    const { format } = decimal(2)
    assert.equal(format(1.222),1.22)
  })
  it('decimal(3) format(1.222) return 1.222',function(){
    const { format } = decimal(3)
    assert.equal(format(1.222),1.222)
  })
  it('decimal(1) format(1.222) return 1.2',function(){
    const { format } = decimal(1)
    assert.equal(format(1.222),1.2)
  })
})
describe('precision',function(){
  it('precision(0.1+0.2),0.3',function(){
    const { precision } = decimal(2)
    assert.equal(precision(0.1+0.2),0.3)
  })
})
