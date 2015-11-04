import Ember from 'ember';
import { strictInvokeAction } from 'ember-invoke-action';

export default Ember.Component.extend({
  didInsertElement() {
    strictInvokeAction(this, 'test');
  }
});
