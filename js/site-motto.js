document.addEventListener('DOMContentLoaded', function () {
  // 在导航栏站点标题下方添加小字
  var navSiteTitle = document.querySelector('#blog-info');
  if (!navSiteTitle) return;

  var motto = document.createElement('span');
  motto.className = 'nav-site-motto';
  motto.textContent = '如若心有所向，何惧道阻且长';
  navSiteTitle.appendChild(motto);
});
