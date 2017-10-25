import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('invokeAction', { integration: true });

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

test('it invokes a function passed in', function(assert) {
  assert.expect(1);
  this.on('test', (x) => { assert.equal(x, 42); });
  this.render(hbs`{{function-component action=(action "test")}}`);
});

test('it invokes a sendAction action', function(assert) {
  assert.expect(1);

  this.on('test', () => { assert.ok(true); });
  this.render(hbs`{{test-component test="test"}}`);
});

test('it throws when an  undefined action name is given', function(assert) {
  assert.expectAssertion(() => {
    this.render(hbs`{{faulty-component}}`);
  }, /The second argument passed to invokeAction must be a string as actionName/);
});

test('it invokes a action from the mixin', function(assert) {
  assert.expect(1);

  this.on('test', () => { assert.ok(true); });
  this.render(hbs`{{mixin-component test=(action "test")}}`);
});

test('strict invoke action raises when no action was called', function(assert) {
  assert.expectAssertion(() => {
    this.render(hbs`{{strict-component}}`);
  }, /No invokable action test was found/);
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

test('invoke calls another action in the actions hash with the right context', function(assert) {
  assert.expect(1);

  this.on('test', () => { return (val) => { assert.equal(val, 42);  }; });
  this.render(hbs`{{action-component test=(action "test")}}`);
});
