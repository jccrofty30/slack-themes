# Slack Dark Theme

## Implement
* Open `ssb-interop.js` (`%appdata%\..\Local\slack\app-3.3.1\resources\app.asar.unpacked\src\static`)
* At the bottom: 
```javascript
// Make sure the wrapper app is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch our CSS in parallel ahead of time
    const cssVarPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/<version>/variables.css';
    const cssPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/<version>/style.css';
    
    // Optional
    const varPromise = fetch(cssVarPath).then(response => response.text());
    
    const cssPromise = fetch(cssPath).then(response => response.text());
    
    // Add any custom CSS here
    const customCSS = ``;
    
    // Insert a style tag into the wrapper view
    Promise.all([varPromise, cssPromise]).then(css => {
        let s = document.createElement('style');
        s.type = 'text/css';
        s.innerHTML = css.join("\n") + customCSS;
        document.head.appendChild(s);
    });
});
```

### Style Variables
_Only needed if `varPromise` is not included_
```css
:root {
    --main-text: #e4e4e4;
    --main-background: #383c4a;
    --main-border: #292c36;
    --main-btn-background: #474b5d;
    --main-btn-border: #1b1b1b;
    --background-elevated: #3f4353;
    --lighter-text-color-1: #e7e7e7;
}
```
<sub>Tweaked from [AngelSix](http://blog.angelsix.com/angelsix/blog/2017/09/12/slack-dark-theme/)</sub>
