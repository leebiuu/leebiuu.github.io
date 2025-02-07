// 页面加载完成后淡入
// 获取视频和音频元素
const video = document.getElementById('myVideo');
const audio = document.getElementById('backgroundMusic');

// 监听视频的播放事件
video.addEventListener('play', function () {
    // 当视频开始播放时，暂停背景音乐
    audio.pause();
});

// 监听视频的暂停事件（可选）
video.addEventListener('pause', function () {
    // 当视频暂停时，恢复背景音乐播放
    audio.play();
});
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

// 自动生成爱心
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 300);
}
createHearts();
document.addEventListener('click', function () {
    document.querySelector('audio').play();
});