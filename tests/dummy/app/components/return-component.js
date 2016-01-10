import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    const func = this.invokeAction('test');
    func();
  }
});
