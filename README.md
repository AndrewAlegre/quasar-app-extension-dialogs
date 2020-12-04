Quasar App Extension - Dialogs
===

This is a simple library to show dialogs anywhere from code while also using a Vuex store.
The extension requires a dialogs folder to be created in the src folder.

Sample Usage:

```javascript
this.$dialogs.show({
  name: 'Folder/fileName',
  props: {
    id: 1,
    variable: this.variable
  },
  dialogProps: {
    persistent: this.persistent
  }
})
```

# Install
```bash
quasar ext add @andrewa813/dialogs
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

# Uninstall
```bash
quasar ext remove @andrewa813/dialogs
```

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
