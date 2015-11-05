import Ember from 'ember';
import invokeAction from 'ember-invoke-action';

export default Ember.Component.extend({
  didInsertElement() {
    const func = invokeAction(this, 'test');
    func();
  }
});
