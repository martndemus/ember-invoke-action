import Component from '@ember/component';
import { strictInvokeAction } from 'ember-invoke-action';

export default Component.extend({
  didInsertElement() {
    strictInvokeAction(this, 'test');
  }
});
