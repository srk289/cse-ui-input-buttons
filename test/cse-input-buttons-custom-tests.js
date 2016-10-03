

// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  
  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for cse-input-buttons', function() {
    // test('Check initial value of counter', function(done){
    var buttonEl1, buttonEl2;
    setup(function() {
      buttonEl1 = Polymer.dom(document).querySelector('#cse_input_buttons_1');
      buttonEl2 = Polymer.dom(document).querySelector('#cse_input_buttons_2');
      buttonEl3 = Polymer.dom(document).querySelector('#cse_input_buttons_3');
      // settings = {};
      // settings.one = {title: "Title Option 1",  
      //                   text: "All",
      //                   type: "default",
      //                   size: "default",
      //                   id: "option1"};

      // var inputButton = document.querySelector('#cse_input_buttons_1');
      // buttonEl1.setAttribute('settings', settings.one);
    });
    
    test('Default Button Should pass valid object', function(done){
      assert.isDefined(buttonEl1.settings, 'Settings must be defined');
      assert.property(buttonEl1.settings, 'id', 'Button should have id');
      assert.property(buttonEl1.settings, 'text', 'Button must have text');

      assert.typeOf(buttonEl1.settings.id, 'string', 'Id should be a string');
      assert.typeOf(buttonEl1.settings.text, 'string', 'Text shouldbe a string');
      done();
    });

    test('Clicking on cse-input-button fires "button-clicked" event', function(done){
      var btn = buttonEl1.querySelector('button');
      buttonEl1.addEventListener('button-click', function(e){
        assert.equal(e.detail.key, 'option1');
        assert.equal(e.detail.val, true);
        done();
      });
      btn.click();
      
    });

    test('Button group (checkbox) valid object', function(done){
      assert.isDefined(buttonEl2.settings, 'Settings must be defined');
      assert.property(buttonEl2.settings, 'id', 'Button should have id');
      assert.property(buttonEl2.settings, 'items', 'Button must have items');
      assert.property(buttonEl2.settings, 'groupType', 'Button must have group type (either checkbox or radio)');
      assert.property(buttonEl2.settings, 'selectedGroup', 'Button must have selectedGroup (either checkbox or radio)');

      assert.typeOf(buttonEl2.settings.id, 'string', 'Id should be a string');
      assert.typeOf(buttonEl2.settings.items, 'array', 'Items shouldbe of type array');
      assert.typeOf(buttonEl2.settings.groupType, 'string', 'GroupType shouldbe of type string');
      assert.typeOf(buttonEl2.settings.selectedGroup, 'object', 'Selected Group shouldbe of type object');
      done();
    });

    test('Clicking on cse-input-button (checkboxes) fires "button-group-click" event', function(done){
      var btn2 = buttonEl2.querySelector('input#one');
      buttonEl2.addEventListener('button-group-click', function(e){
        assert.equal(e.detail.val.one, true);
        // assert.equal(e.detail.val, false);
        done();
      });
      btn2.click();
    });

    test('Button group (radio) valid object', function(done){
      assert.isDefined(buttonEl2.settings, 'Settings must be defined');
      assert.property(buttonEl2.settings, 'id', 'Button should have id');
      assert.property(buttonEl2.settings, 'items', 'Button must have items');
      assert.property(buttonEl2.settings, 'groupType', 'Button must have group type (either checkbox or radio)');
      assert.property(buttonEl2.settings, 'selectedGroup', 'Button must have selectedGroup (either checkbox or radio)');

      assert.typeOf(buttonEl2.settings.id, 'string', 'Id should be a string');
      assert.typeOf(buttonEl2.settings.items, 'array', 'Items shouldbe of type array');
      assert.typeOf(buttonEl2.settings.groupType, 'string', 'GroupType shouldbe of type string');
      assert.typeOf(buttonEl2.settings.selectedGroup, 'object', 'Selected Group shouldbe of type object');
      done();
    });

    test('Clicking on cse-input-button (radio) fires "button-group-click" event', function(done){
      var btn2 = buttonEl2.querySelector('input#one');
      buttonEl2.addEventListener('button-group-click', function(e){
        assert.equal(e.detail.val.one, false);
        // assert.equal(e.detail.val, false);
        done();
      });
      // btn2.click();
    });


  });
};
