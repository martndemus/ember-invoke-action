//import { Component, assert, isArray } from 'ember';
import Ember from 'ember';
let { Component, assert, isArray } = Ember;

export function initialize(/* container, application */) {
  Component.reopen({
    concatenatedProperties: ['requiredActions', 'requiredParams'],
    requiredParams: [],
    requiredActions: [],

    invokeAction (actionName, ...args) {
      assert(`invoke action must be passed a string as actionName, got ${actionName}`,
        typeof actionName === 'string');

      const action = this.attrs[actionName];

      if (typeof action === 'function') {
        return action(...args);
      } else {
        return undefined;
      }
    },

    didReceiveAttrs() {
      this._super(...arguments);
      if (isArray(this.get("requiredActions"))) {
        this.get("requiredActions").forEach(item => {
          assert(`${this} requires an ${item} action to be passed`, item in this.attrs && typeof this.attrs[item] === 'function');
        });
      }
      if (isArray(this.get("requiredParams"))) {
        this.get("requiredParams").forEach(item => {
          assert(`${this} requires a ${item} parameter to be passed`, item in this.attrs);
        });
      }
    }

  });
}

export default {
  name: 'reopen-component',
  initialize: initialize
};
