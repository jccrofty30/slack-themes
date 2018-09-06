# Slack Dark Theme

## Implement
1. Open `ssb-interop.js` (`%appdata%\..\Local\slack\app-3.3.1\resources\app.asar.unpacked\src\static`)
1. At the bottom: 
```javascript
// Make sure the wrapper app is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch our CSS in parallel ahead of time
    const cssVarPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/<version>/variables.css';
    const cssPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/<version>/style.css';
    
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
<sub>Tweaked from [AngelSix](http://blog.angelsix.com/angelsix/blog/2017/09/12/slack-dark-theme/)</sub>
