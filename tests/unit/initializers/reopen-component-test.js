import Ember from 'ember';
import { initialize } from '../../../initializers/reopen-component';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | reopen component', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);


  assert.ok(true);
});
