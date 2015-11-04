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

test('it invokes a sendAction action', function(assert) {
  assert.expect(1);

  this.on('test', () => { assert.ok(true); });
  this.render(hbs`{{test-component test="test"}}`);
});

test('it throws when an  undefined action name is given', function(assert) {
  assert.throws(() => {
    this.render(hbs`{{faulty-component}}`);
  }, /invoke action must be passed a string as actionName, got null/);
});

test('it invokes a action from the mixin', function(assert) {
  assert.expect(1);

  this.on('test', () => { assert.ok(true); });
  this.render(hbs`{{mixin-component test=(action "test")}}`);
});
