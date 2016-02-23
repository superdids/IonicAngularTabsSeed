describe('Stack Service', function() {

  var Stack;
  beforeEach(module('starter.services'));

  beforeEach(inject(function(_Stack_) {
    Stack = _Stack_;
  }));

  it('Should be four items', function() {
    expect(Stack.all().length).toBe(4);
  });

  it('Should be in front upon insertion', function() {
    var item = "yoyo";
    Stack.push(item);
    expect(Stack.all()[0]).toBe(item);
  });

  it('Should be empty upon clearing', function() {
    Stack.clear();
    expect(Stack.all().length).toBe(0);
  });

  it('Should be tested inserting two items', function() {
    Stack.clear();
    Stack.push("a");
    Stack.push("b");
    var items = Stack.all();
    expect(items[0]).toBe("b");
    expect(items[1]).toBe("a");
  });

});
