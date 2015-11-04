import Ember from 'ember';

const { assert, get } = Ember;

const invokeAction = function(object, actionName, ...args) {
  assert(`invoke action must be passed a string as actionName, got ${actionName}`,
         typeof actionName === 'string');

  const action = get(object, actionName);

  if (typeof action === 'string') {
    object.sendAction(actionName, ...args);
  } else if (typeof action === 'function') {
    action(...args);
  }
};

export default invokeAction;

export var InvokeActionMixin = Ember.Mixin.create({
  invokeAction(actionName, ...args) {
    invokeAction(this, actionName, ...args);
  }
});
