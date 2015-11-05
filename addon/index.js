import Ember from 'ember';

const { assert, get } = Ember;

export var strictInvokeAction = function(object, actionName, ...args) {
  assert(`invoke action must be passed a string as actionName, got ${actionName}`,
         typeof actionName === 'string');

  const action = get(object, actionName);

  if (typeof action === 'string') {
    object.sendAction(actionName, ...args);
  } else if (typeof action === 'function') {
    return action(...args);
  } else {
    assert(`No invokable action ${actionName} was found`, false);
  }
};

export var invokeAction = function(...args) {
  try {
    return strictInvokeAction(...args);
  } catch(e) {
    if (!e.message.match(/^Assertion Failed: No invokable action .+ was found$/)) {
      throw e;
    }
  }
};

export var InvokeActionMixin = Ember.Mixin.create({
  invokeAction(actionName, ...args) {
    return invokeAction(this, actionName, ...args);
  },

  strictInvokeAction(actionName, ...args) {
    return strictInvokeAction(this, actionName, ...args);
  }
});

export default invokeAction;
