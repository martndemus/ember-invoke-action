import Component from '@ember/component';
import invokeAction from 'ember-invoke-action';

export default Component.extend({
  didInsertElement() {
    const func = invokeAction(this, 'test');
    func();
  }
});
