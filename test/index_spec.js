describe('Attributes', function(){

  var attrs = component('attributes');

  beforeEach(function(){
    this.el = document.createElement('div');
    this.el.setAttribute('checked', 'checked');
    this.el.setAttribute('data-foo', 'bar');
    this.el.setAttribute('title', 'foo');
  });

  it('should return an object of attributes', function(){
    var data = attrs(this.el);
    expect(data.checked).to.equal('checked');
    expect(data['data-foo']).to.equal('bar');
    expect(data.title).to.equal('foo');
  });
});