// 手动配置文章总数
document.addEventListener('DOMContentLoaded', function () {
  // 从 window 对象获取配置
  var customPostCount = window.CUSTOM_POST_COUNT || 59;
  
  // 更新侧边栏文章数量
  var lengthNums = document.querySelectorAll('.card-info-data .length-num');
  lengthNums.forEach(function (el) {
    var headline = el.previousElementSibling;
    if (headline && headline.textContent.trim() === '文章') {
      el.textContent = customPostCount;
    }
  });
  
  // 更新网站资讯中的文章数目
  var webinfoItems = document.querySelectorAll('.webinfo-item');
  webinfoItems.forEach(function (item) {
    var name = item.querySelector('.item-name');
    var count = item.querySelector('.item-count');
    if (name && count && name.textContent.includes('文章数目')) {
      count.textContent = customPostCount;
    }
  });
});
