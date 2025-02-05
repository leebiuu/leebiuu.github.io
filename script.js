// 页面加载完成后淡入
window.onload = function () {
    document.body.style.opacity = '1';
};

// 点击图片放大（需在CSS中添加 .zoom 类）
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoom');
    });
});

// 自动播放音乐（解决浏览器限制）
document.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    audio.play();
});