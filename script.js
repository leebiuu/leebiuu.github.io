// ҳ�������ɺ���
window.onload = function () {
    document.body.style.opacity = '1';
};

// ���ͼƬ�Ŵ�����CSS����� .zoom �ࣩ
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoom');
    });
});

// �Զ��������֣������������ƣ�
document.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    audio.play();
});