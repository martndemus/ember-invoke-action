import Ember from 'ember';

const { assert, get } = Ember;

const makeInvokeAction = ({ strict = false } = {}) => {
  return function(object, actionName, ...args) {
    assert('The first argument passed to invokeAction must be an object',
           typeof object === 'object');
    assert('The second argument passed to invokeAction must be a string as actionName',
           typeof actionName === 'string');

    let action = get(object, actionName);

    if (typeof action === 'string') {
      object.sendAction(actionName, ...args);
    } else if (typeof action === 'function') {
      return action(...args);
    } else if (strict) {
      assert(`No invokable action ${actionName} was found`, false);
    }
  };
};

export const invokeAction = makeInvokeAction();
export const strictInvokeAction = makeInvokeAction({ strict: true });

export const InvokeActionMixin = Ember.Mixin.create({
  invokeAction() {
    return invokeAction(this, ...arguments);
  },

  strictInvokeAction() {
    return strictInvokeAction(this, ...arguments);
  }
});

export default invokeAction;
