# ember-invoke-action
[![NPM Version](https://badge.fury.io/js/ember-invoke-action.svg)](http://badge.fury.io/js/ember-invoke-action)
[![Build Status](https://travis-ci.org/martndemus/ember-invoke-action.svg?branch=master)](https://travis-ci.org/martndemus/ember-invoke-action)
[![Ember Observer Score](http://emberobserver.com/badges/ember-invoke-action.svg)](http://emberobserver.com/addons/ember-invoke-action)

A slightly more idiomatic way to invoke actions in your Ember components.

## Installation

```
ember install ember-invoke-action
```

## How To

This add on places the method `invokeAction` on every component. This method will test for a closure action, and if
none is found, it will return undefined

```
let x = invokeAction('onChange', newValue);
```

## Required Actions

If an action is required for your component to work, you can add it the the array `requiredActions`. If an action
is not passed, an error will be thrown.

```
  requiredActions: ['onChange']
```

If you wish to check for required parameters, the array 'requiredParams' is available.

## Credits

This code was inspired by @miguelcobain, I just made an addon out of it.
