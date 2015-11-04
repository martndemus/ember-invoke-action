import Ember from 'ember';
import { InvokeActionMixin } from 'ember-invoke-action';

export default Ember.Component.extend(InvokeActionMixin, {
  didInsertElement() {
    this.invokeAction('test', 42);
  }
});

