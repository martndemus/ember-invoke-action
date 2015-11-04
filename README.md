# ember-invoke-action
[![NPM Version](https://badge.fury.io/js/ember-invoke-action.svg)](http://badge.fury.io/js/ember-invoke-action)
[![Build Status](https://travis-ci.org/martndemus/ember-invoke-action.svg?branch=master)](https://travis-ci.org/martndemus/ember-invoke-action)
[![Ember Observer Score](http://emberobserver.com/badges/ember-invoke-action.svg)](http://emberobserver.com/addons/ember-invoke-action)

This README outlines the details of collaborating on this Ember addon.

## Installation

```
ember install ember-invoke-actions
```

## How To

You can either use `ember-invoke-action` as a helper function or a mixin.

### Mixin usage

```javascript
import Ember from 'ember';
import { InvokeActionMixin } from 'ember-invoke-action';

export default Ember.Component.extend(InvokeActionMixin, {
  click(...args) {
    this.invokeAction('click', ...args);
  }
});
```

### Helper usage

```javascript
import Ember from 'ember';
import invokeAction from 'ember-invoke-action';

export default Ember.Component.extend({
  click(...args) {
    invokeAction(this, 'click', ...args);
  }
});
```

## Credits

This code was inspired by @miguelcobain, I just made an addon out of it.
