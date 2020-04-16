"use strict";

var pages = [{
  name: 'Editor',
  slug: 'lorem',
  desc: 'Preview the basic typesetting'
}, {
  name: 'Focus Mode',
  slug: 'outline-open-and-focus-mode',
  desc: 'Preview pinned outline panel on Typora for macOS, and focus mode'
}, {
  name: 'Source Code Mode',
  slug: 'source-mode',
  desc: 'Preview source code mode syntax highlighting style'
}, {
  name: 'UI Controls',
  slug: 'ui-controls',
  desc: 'Preview some control UIs on macOS, Windows, and Linux and window frame for "unibody" style on Windows'
}, {
  name: 'UI Controls 2',
  slug: 'ui-controls2',
  desc: 'Preview tips/notifications in Typora and the side panel style on Windows/Linux'
}, {
  name: 'Unibody',
  slug: 'unibody',
  desc: 'Preview the menu style for "unibody"  style on Windows'
}];
document.addEventListener("DOMContentLoaded", function () {
  var previewsEl = document.querySelector('.previews');
  pages.forEach(function (p) {
    var pageEl = document.createElement('li');
    pageEl.innerHTML = "\n            <a href=\"".concat(p.slug, ".html\"/>\n                <h3>").concat(p.name, "</h3>\n                <p>").concat(p.desc, "</p>\n            </a>\n        ");
    previewsEl.appendChild(pageEl);
  });
});