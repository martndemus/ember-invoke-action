import Component from '@ember/component';
import { InvokeActionMixin } from 'ember-invoke-action';

export default Component.extend(InvokeActionMixin, {
  didInsertElement() {
    this.invokeAction('test', 42);
  }
});

