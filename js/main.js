// 移动端汉堡菜单切换
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
// 点击导航链接后自动收起菜单（手机端）
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});
