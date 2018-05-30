import Mixin from '@ember/object/mixin';
import { assert } from '@ember/debug';
import { get } from '@ember/object';

const makeInvokeAction = ({ strict = false } = {}) => {
  return (object, actionName, ...args) => {
    assert('The first argument passed to invokeAction must be an object',
           typeof object === 'object');

    let action;
    if (typeof actionName === 'string') {
      action = get(object, actionName);
    } else if (typeof actionName === 'function') {
      action = actionName;
    } else {
      assert('The second argument passed to invokeAction must be a string as actionName or a function',
             false);
    }

    if (typeof action === 'string') {
      object.sendAction(actionName, ...args);
    } else if (typeof action === 'function') {
      return action(...args);
    } else if (strict) {
      assert(`No invokable action ${actionName} was found`, false);
    }
  };
};

const getActions = (object) => {
  return object.actions ? object.actions : object._actions;
};

const makeInvoke = ({ strict = false } = {}) => {
  return (object, actionName, ...args) => {
    let actions = getActions(object);
    let action = actions && actions[actionName];

    if (typeof action === 'function') {
      return action.call(object, ...args);
    } else if (strict) {
      assert(`No invokable action ${actionName} was found`, false);
    }
  };
};

export const invokeAction = makeInvokeAction();
export const strictInvokeAction = makeInvokeAction({ strict: true });

export const invoke = makeInvoke();
export const strictInvoke = makeInvoke({ strict: true });

export const InvokeActionMixin = Mixin.create({
  invokeAction() {
    return invokeAction(this, ...arguments);
  },

  strictInvokeAction() {
    return strictInvokeAction(this, ...arguments);
  },

  invoke() {
    return invoke(this, ...arguments);
  },

  strictInvoke() {
    return strictInvoke(this, ...arguments);
  }
});

export default invokeAction;
