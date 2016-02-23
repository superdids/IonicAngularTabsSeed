describe('Stack Controller', function () {
  var scope, Stack, items;

  beforeEach(module('starter.controllers'));
  beforeEach(function () {
    items = [];
    Stack = {
      clear: function () {
        items = "";
      }, all: function () {
        return items;
      }, push: function (item) {
        items.splice(0, 0, item);
      }, pop: function () {
        items.shift();
      }
    };
    module(function($provide) {
      $provide.value('Stack', Stack);
    });
  });
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('StackCtrl', { $scope: scope });
  }));

  it('should be inserted', function() {
    scope.push("asdd");
    expect(scope.stack[0]).toBe("asdd");
  });

  it('should not be happening anything upon popping empty stack', function() {
    expect(scope.stack.length).toBe(0);
    scope.pop();
    expect(scope.stack.length).toBe(0);
  });

  it('should be tested upon inserting two items', function() {
    scope.push("a");
    scope.push("b");
    expect(scope.stack[0]).toBe("b");
    expect(scope.stack[1]).toBe("a");
  });


  it('should be tested with all items upon inserting three', function() {
    scope.push("a");
    scope.push("b");
    scope.push("c");
    expect(scope.stack).toEqual(["c","b","a"]);
  });

});
