export default function progress() {
    const sliderBall = document.getElementById('sliderBall');
    const sliderRange = document.getElementById('sliderRange');
    const percentageText = document.getElementById('percentage');

    let isDragging = false;

    function moveSlider(newX) {
        // Получаем размеры слайдера
        const sliderRect = sliderRange.getBoundingClientRect();
        
        // Ограничиваем новое значение в пределах слайдера
        if (newX < 0) newX = 0;
        if (newX > sliderRect.width) newX = sliderRect.width;

        // Изменяем позицию шарика
        sliderBall.style.left = newX + 'px';

        // Вычисляем процент
        const percentage = Math.round((newX / sliderRect.width) * 100);
        percentageText.textContent = percentage + '%';

        // Обновляем позицию текста процента, чтобы он был центром шарика
        const percentagePosition = newX - (percentageText.offsetWidth / 2);

        // Ограничиваем позицию текста в пределах слайдера
        if (percentagePosition < 0) {
            percentageText.style.right = '0px';
        } else if (percentagePosition + percentageText.offsetWidth > sliderRect.width) {
            percentageText.style.right = (sliderRect.width - percentageText.offsetWidth) + 'px';
        }
    }

    // Обработчик мыши для PC
    sliderBall.addEventListener('mousedown', function () {
        isDragging = true;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const newX = e.clientX - sliderRange.getBoundingClientRect().left;
            moveSlider(newX);
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Добавление поддержки для тач-устройств (включая iOS)
    sliderBall.addEventListener('touchstart', function (e) {
        isDragging = true; 
        // Предотвращение прокрутки страницы во время касания
        e.preventDefault();
    });

    document.addEventListener('touchmove', function (e) {
        if (isDragging) {
            const newX = e.touches[0].clientX - sliderRange.getBoundingClientRect().left;
            moveSlider(newX);
        }
    });

    document.addEventListener('touchend', function () {
        isDragging = false;
    });
}