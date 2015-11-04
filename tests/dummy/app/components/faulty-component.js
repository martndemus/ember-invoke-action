import Ember from 'ember';
import invokeAction from 'ember-invoke-action';

export default Ember.Component.extend({
  didInsertElement() {
    invokeAction(this, null);
  }
});
