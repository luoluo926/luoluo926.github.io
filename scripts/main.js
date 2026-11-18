/* luoluo | main.js
 * 无依赖的轻量交互：移动端导航菜单、项目截图加载、页脚年份。
 * JS 关闭时正文与所有链接仍可正常阅读访问。
 */
(function () {
  'use strict';

  // ---- 移动端导航菜单 ----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  // ---- 项目截图：素材就绪后才显示，未就绪时保持纯文字占位 ----
  document.querySelectorAll('[data-image]').forEach(function (slot) {
    var sources = [slot.dataset.image, slot.dataset.fallbackImage].filter(Boolean);
    var trySource = function (index) {
      if (index >= sources.length) return;
      var picture = new Image();
      picture.alt = slot.dataset.alt || 'Project screenshot';
      picture.loading = 'lazy';
      picture.onload = function () {
        slot.appendChild(picture);
        slot.classList.add('has-image');
      };
      picture.onerror = function () { trySource(index + 1); };
      picture.src = sources[index];
    };
    trySource(0);
  });

  // ---- 页脚年份 ----
  var year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
