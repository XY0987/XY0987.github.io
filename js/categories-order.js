// 分类页按指定顺序排列并默认全部展开
document.addEventListener("DOMContentLoaded", function () {
  var categoryList = document.querySelector(".category-list");
  if (!categoryList) return;

  var order = [
    "前端基础",
    "基础知识",
    "Vue框架及周边库",
    "React框架及周边库",
    "全栈",
    "AI相关",
    "跨端",
    "架构设计",
    "工程化",
    "优秀第三方库研究",
    "项目",
    "算法",
    "面试",
    "书籍学习",
    "杂记",
  ];

  var items = Array.from(categoryList.children);
  var sorted = [];
  order.forEach(function (name) {
    var found = items.find(function (li) {
      var a = li.querySelector("a");
      return a && a.textContent.replace(/\s*\(\d+\)\s*$/, "").trim() === name;
    });
    if (found) sorted.push(found);
  });
  // 追加未在 order 中的项
  items.forEach(function (li) {
    if (sorted.indexOf(li) === -1) sorted.push(li);
  });
  sorted.forEach(function (li) {
    categoryList.appendChild(li);
  });

  // 展开所有子分类
  var nested = document.querySelectorAll(".category-list .category-list");
  nested.forEach(function (ul) {
    ul.style.display = "block";
  });
});
