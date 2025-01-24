// 背景音乐
let isPlaying = false;

function toggleLogoAnimation() {
    const logo = document.getElementById('music-logo');
    const audio = document.getElementById('logo-audio');
    audio.volume = 0.5;
    if (isPlaying) {
        // 切换回静态图片并停止音乐
        logo.src = 'assets/images/logo/demo_logo.png';
        audio.pause();
        audio.currentTime = 0; // 重置音乐到开头
    } else {
        // 切换为 GIF 动画并播放音乐
        logo.src = 'assets/images/logo/logo.gif';
        audio.play();
    }

    isPlaying = !isPlaying; // 切换状态
}

