import Component from '@ember/component';
import { invoke, invokeAction } from 'ember-invoke-action';

export default Component.extend({
  myValue: 42,

  didInsertElement() {
    let [func, value] = invoke(this, 'test');
    func(value);
  },

  actions: {
    test() {
      let func = invokeAction(this, 'test');
      return [func, this.get('myValue')];
    }
  }
});
