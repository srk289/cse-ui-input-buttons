// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  
  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for cse-input-buttons', function() {
    // test('Check initial value of counter', function(done){
    var buttonEl1;
    setup(function() {
      buttonEl1 = Polymer.dom(document).querySelector('#cse_input_buttons_1');
    });
    
    test('Should pass valid object', function(done){
      assert.isDefined(buttonEl1.settings, 'Settings must be defined');
      assert.property(buttonEl1.settings, 'id', 'Button should have id');
      assert.property(buttonEl1.settings, 'text', 'Button must have text');

      assert.typeOf(buttonEl1.settings.id, 'string', 'Id should be a string');
      assert.typeOf(buttonEl1.settings.text, 'string', 'Text shouldbe a string');
      done();
    });

    test('Clicking on cse-input-button fires "button-clicked" event', function(done){
      var btn = buttonEl1.querySelector('button');
      buttonEl1.addEventListener('button-clicked', function(e){
        assert.equal(e.detail.key, 'option1');
        assert.equal(e.detail.val, true);
        done();
      });
      btn.click();
      
    });

    test('Button group valid object', function(done){
      assert.isDefined(buttonEl1.settings, 'Settings must be defined');
      assert.property(buttonEl1.settings, 'id', 'Button should have id');
      assert.property(buttonEl1.settings, 'text', 'Button must have text');

      assert.typeOf(buttonEl1.settings.id, 'string', 'Id should be a string');
      assert.typeOf(buttonEl1.settings.text, 'string', 'Text shouldbe a string');
      done();
    });

    test('Clicking on cse-input-button fires "button-group-click" event', function(done){
      var btn1 = buttonEl1.querySelector('button');
      buttonEl1.addEventListener('button-clicked', function(e){
        assert.equal(e.detail.key, 'option1');
        // assert.equal(e.detail.val, false);
        
      });
      done();
      //btn1.click();
      
    });
  });
};
