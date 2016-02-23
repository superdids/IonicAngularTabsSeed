describe('Protractor tests', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("Dashboard");
  });

  describe('Links', function() {
    it('should press Chats tab and have new title', function() {
      //console.log();
      element.all(by.tagName('a')).get(1).click();
      expect(browser.getTitle()).toEqual("Chats");
    });

    it('should press Account tab and have new title', function() {
      //console.log();
      element.all(by.tagName('a')).get(2).click();
      expect(browser.getTitle()).toEqual("Account");
    });

    it('should press Stack tab and have new title', function() {
      //console.log();
      element.all(by.tagName('a')).get(3).click();
      expect(browser.getTitle()).toEqual("Stack");
    });
  });

  describe('Stack scenarios', function() {

    var input, push, pop;

    beforeEach(function() {
      element.all(by.tagName('a')).get(3).click();
      input = element(by.id("stackInput"));
      push = element(by.buttonText("Push"));
      pop = element(by.buttonText("Pop"));
    });

    it('should work by adding an item', function() {

       element.all(by.repeater("val in stack")).then(function(items) {
         input.sendKeys("asd");
         push.click();
         expect(element.all(by.repeater("val in stack")).count()).toBe(items.length+1);
         expect(element(by.repeater("val in stack").row(0).column("val")).getText()).toEqual("asd");
       });
    });

    it('should show below item after popping', function() {
      var itms = [];
      element.all(by.repeater("val in stack")).then(function(items) {
        for(var x = 0; x < items.length; x++) {
          itms[x] = element(by.repeater("val in stack").row(x).column("val")).getText();
        }
        pop.click();
        expect(element(by.repeater("val in stack").row(0).column("val")).getText()).toEqual(itms[1]);
      })
    });

  });

});
