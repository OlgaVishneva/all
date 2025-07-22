export default function progress() {
  const sliderBall = document.getElementById('sliderBall');
  const sliderRange = document.getElementById('sliderRange');
  const percentageText = document.getElementById('percentage');
  
  let isDragging = false;
  
  sliderBall.addEventListener('mousedown', function (e) {
      isDragging = true;
  });
  
  document.addEventListener('mousemove', function (e) {
      if (isDragging) {
          const sliderRect = sliderRange.getBoundingClientRect();
          let newX = e.clientX - sliderRect.left;
  
          // Ограничение перемещения по полоске
          if (newX < 0) newX = 0;
          if (newX > sliderRect.width) newX = sliderRect.width;
  
          // Изменение позиции шарика
          sliderBall.style.left = newX + 'px';
  
          // Вычисление процентного значения
          const percentage = Math.round((newX / sliderRect.width) * 100);
          percentageText.textContent = percentage + '%';
  
          // Вычисление позиции процентов, чтобы они были центром шарика
          const percentagePosition = newX - (percentageText.offsetWidth / 2);
          
          // Ограничение позиции процентов в пределах полоски
          if (percentagePosition < 0) {
              percentageText.style.right = '0px';
          } else if (percentagePosition + percentageText.offsetWidth > sliderRect.width) {
              percentageText.style.right = (sliderRect.width - percentageText.offsetWidth) + 'px';
          }
      }
  });
  
  document.addEventListener('mouseup', function () {
      isDragging = false;
  });
}