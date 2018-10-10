// ==UserScript==
// @name         Slack - Theme Loader
// @namespace    SlackTweaks
// @version      0.2
// @description  Load Slack Themes from Github repo
// @author       Jason Croft
// @match        https://<organization>.slack.com/*
// @grant        none
// ==/UserScript==

(function() {
    // Fetch our CSS in parallel ahead of time
    const cssVarPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/3.x.x/variables.css';
    const cssPath = 'https://raw.githubusercontent.com/jccrofty30/slack-themes/master/Dark/3.x.x/style.css';

    const varPromise = fetch(cssVarPath).then(response => response.text());
    const cssPromise = fetch(cssPath).then(response => response.text());

    // Insert a style tag into the wrapper view
    Promise.all([varPromise, cssPromise]).then(css => {
        let s = document.createElement('style');
        s.type = 'text/css';
        s.innerHTML = css.join("\n");
        document.head.appendChild(s);
    });
})();
