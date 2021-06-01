var merge = require('../index');

describe('merge', function() {
  
  describe('an object', function() {
    var a = { foo: 'bar' }
      , b = { bar: 'baz' };
    var o = merge(a, b);
    
    it('should merge properties into first object', function() {
      expect(Object.keys(a)).to.have.length(2);
      expect(a.foo).to.be.equal('bar');
      expect(a.bar).to.be.equal('baz');
    });
    
    it('should return first argument', function() {
      expect(o).to.be.equal(a);
    });
  });
  
  describe('an object with duplicate key', function() {
    var a = { foo: 'bar', qux: 'corge' }
      , b = { foo: 'baz' };
    var o = merge(a, b);
    
    it('should merge properties into first object', function() {
      expect(Object.keys(a)).to.have.length(2);
      expect(a.foo).to.be.equal('baz');
      expect(a.qux).to.be.equal('corge');
    });
    
    it('should return first argument', function() {
      expect(o).to.be.equal(a);
    });
  });
  
  describe('without a source object', function() {
    var a = { foo: 'bar' };
    var o = merge(a);
    
    it('should leave first object unmodified', function() {
      expect(Object.keys(a)).to.have.length(1);
      expect(a.foo).to.be.equal('bar');
    });
    
    it('should return first argument', function() {
      expect(o).to.be.equal(a);
    });
  });

   it('should not mutate first parameter', function() {
    const foo = { foo: "foo" };
    const bar = { bar: "bar" };
    const result = merge(foo, bar);
    expect(Object.keys(foo)).to.have.length(1);
    expect(result.foo).to.be.equal('foo');
    expect(result.bar).to.be.equal('bar');
  });

    
  it('should not mutate second parameter', function() {
    const foo = { foo: "foo" };
    const bar = { bar: "bar" };
    const result = merge(foo, bar);
    expect(Object.keys(bar)).to.have.length(1);
    expect(result.foo).to.be.equal('foo');
    expect(result.bar).to.be.equal('bar');
  });
});
