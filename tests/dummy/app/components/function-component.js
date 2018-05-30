import Component from '@ember/component';
import invokeAction from 'ember-invoke-action';

export default Component.extend({
  didInsertElement() {
    invokeAction(this, this.get('action'), 42);
  }
});
