(function() {
    // Эффект "затухающего поделенного фона" уже реализован через CSS-слои.
    // Пользователь может загрузить свой фон через кнопку внизу
    
    // 1. Задаём начальное фоновое изображение — красивое и эстетичное, нейтральное (горы, туман, отлично подойдет под WhiteLotus)
    const DEFAULT_BG = 'https://i.pinimg.com/1200x/ed/11/6e/ed116e818eef98d3b034444eabbbd835.jpg'
    
    // Простой плавающий тост для обратной связи
    function showFloatingMessage(msg, duration = 1800) {
        let toast = document.querySelector('.custom-toast');
        if (toast) toast.remove();
        toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.textContent = msg;
        toast.style.position = 'fixed';
        toast.style.bottom = '80px';
        toast.style.right = '30px';
        toast.style.backgroundColor = 'rgba(0,0,0,0.7)';
        toast.style.backdropFilter = 'blur(12px)';
        toast.style.color = 'white';
        toast.style.padding = '8px 20px';
        toast.style.borderRadius = '40px';
        toast.style.fontFamily = "'Inter', sans-serif";
        toast.style.fontSize = '0.85rem';
        toast.style.zIndex = '1000';
        toast.style.border = '1px solid rgba(255,255,255,0.25)';
        toast.style.pointerEvents = 'none';
        toast.style.fontWeight = '500';
        toast.style.letterSpacing = '0.3px';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }
    
    // Дополнительный эффект при клике на кнопку
    const inspireBtn = document.getElementById('inspireBtn');
    const infoSection = document.getElementById('infoSection');

    if (inspireBtn && infoSection) {
        inspireBtn.addEventListener('click', function() {
            infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    // Плавное исчезновение фона при скролле — не нужно, переход делается через CSS .fade-to-black
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
            // Плавное смещение фонового слоя очень незначительное
            if (bgElement) {
                const moveX = mouseX * 12;
                const moveY = mouseY * 8;
                bgElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
                bgElement.style.transition = 'transform 0.2s ease-out';
            }
        }
    });
    
    // Возвращаем позицию при уходе мыши с окна
    document.addEventListener('mouseleave', function() {
        if (bgElement) {
            bgElement.style.transform = 'translate(0px, 0px) scale(1)';
        }
    });
    
    console.log('WhiteLotus — фон поделён и затухает, готов к загрузке пользовательского изображения');
})();