// Keyboard and screen-reader support layered on top of the Butterfly theme.
(function () {
  'use strict'

  // <a role="button"> should also activate with the Space key, like a real button.
  document.addEventListener('keydown', function (e) {
    var el = e.target
    if ((e.key === ' ' || e.key === 'Spacebar') && el && el.tagName === 'A' && el.getAttribute('role') === 'button') {
      e.preventDefault()
      el.click()
    }
  })

  document.addEventListener('DOMContentLoaded', function () {
    var searchBtn = document.querySelector('#search-button > .search')
    var menuBtn = document.querySelector('#toggle-menu > a')
    var sidebar = document.getElementById('sidebar-menus')
    var menuMask = document.getElementById('menu-mask')

    // Mobile sidebar: expose open/closed state, close with Escape, return focus.
    if (menuBtn && sidebar) {
      menuBtn.setAttribute('aria-expanded', 'false')
      menuBtn.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'true')
        var first = sidebar.querySelector('a[href]')
        if (first) setTimeout(function () { first.focus() }, 50)
      })
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open') && menuMask) {
          menuMask.click()
          menuBtn.setAttribute('aria-expanded', 'false')
          menuBtn.focus()
        }
      })
      if (menuMask) {
        menuMask.addEventListener('click', function () { menuBtn.setAttribute('aria-expanded', 'false') })
      }
    }

    // Search dialog: put focus back on the search button when it closes.
    var dialog = document.querySelector('#local-search .search-dialog')
    if (searchBtn && dialog) {
      var returnFocus = function () { setTimeout(function () { searchBtn.focus() }, 520) }
      var closeBtn = dialog.querySelector('.search-close-button')
      if (closeBtn) closeBtn.addEventListener('click', returnFocus)
      var mask = document.getElementById('search-mask')
      if (mask) mask.addEventListener('click', returnFocus)
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && getComputedStyle(dialog).display === 'block') returnFocus()
      })
    }

    // Images still missing alt text after the build get an empty alt only if they
    // are purely decorative theme assets; content images are handled at build time.
    document.querySelectorAll('img.shuoshuo-img[src*="avatar"], .aplayer img').forEach(function (img) {
      if (!img.hasAttribute('alt')) img.setAttribute('alt', '')
    })

    // Embedded players without a title get one so screen readers can announce them.
    document.querySelectorAll('iframe:not([title])').forEach(function (f) {
      f.setAttribute('title', 'Embedded content')
    })
  })
})()
