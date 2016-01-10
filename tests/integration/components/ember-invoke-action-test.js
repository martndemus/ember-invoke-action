import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import initializer from "ember-invoke-action/initializers/reopen-component";

moduleForComponent('invoke-action', 'Integration | Component | invoke action', {
  integration: true,

  setup() {
    initializer.initialize(this);
  }
});

test('it invokes a closure action', function(assert) {
  assert.expect(1);

  this.on('test', () => { assert.ok(true); });
  this.render(hbs`{{test-component test=(action "test")}}`);
});

test('it invokes a closure action with arguments', function(assert) {
  assert.expect(1);

  this.on('test', (x) => { assert.equal(x, 42); });
  this.render(hbs`{{test-component test=(action "test")}}`);
});

test('it throws when an undefined action name is given', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{faulty-component}}`);
  }, /invoke action must be passed a string as actionName, got null/);
});

test('invoke action does not raise when no action was called', function(assert) {
  assert.expect(0);
  this.render(hbs`{{test-component}}`);
});

test('invoke action returns the result of the action', function(assert) {
  assert.expect(1);

  this.on('test', () => { return () => { assert.ok(true);  }; });
  this.render(hbs`{{return-component test=(action "test")}}`);
});

test('required actions are not satisfied', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{require-action-component}}`);
  }, /requires an .* action to be passed/);
});

test('required actions are satisfied', function(assert) {
  assert.expect(0);
  this.on('test', (x) => { assert.equal(x, 42); });
  this.render(hbs`{{require-action-component onChange=(action "test")}}`);
});

test('required params are not satisfied', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{require-param-component}}`);
  }, /requires a .* parameter to be passed/);
});

test('required params are satisfied', function(assert) {
  assert.expect(0);
  this.render(hbs`{{require-param-component content="hello"}}`);
});
