:cookie: :rotating_light: 

# pk-cookie-alert


A bundle that adds a global alert to a site that, once dismissed, won't reappear (unless cookies are cleared). includes a `pk-cookie-alert-global` module in addition to the root `pk-cookie-alert` module.

## Configuration

### Basic set up:

```
//in app.js
...
  modules: {
    ...
    'pk-cookie-alert': {},
    'pk-cookie-alert-global': {}
    ...
  }
...
```

Alert gets prepended to the `body` automatically.

### Configuring the base module

You can configure your own base class name and cookie name for project-level overrides (optional)

```
//in app.js
...
  modules: {
    ...
    'pk-cookie-alert': {
      baseClass: 'my-class',
      cookieName: 'my-cookie'
    },
    'pk-cookie-alert-global': {}
    ...
  }
...
```

### Configuring rich text

You can pass in your own rich text configuration for the global `pkAlertText` field via a `richTextConfig` option:

```
//in app.js
...
  modules: {
    ...
    'pk-cookie-alert': {},
    'pk-cookie-alert-global': {
      richTextConfig: { toolbar: [ 'Bold', 'Link', 'Unlink' ] }
    }
    ...
  }
...
```
