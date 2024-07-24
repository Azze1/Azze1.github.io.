    // Добавляем обработчик события для кнопки Main-Button
    document.getElementById('Card-Text2').addEventListener('click', function() {
        currentCount += GLOBAL_BUTTON_Count;
        countText.textContent = currentCount.toFixed(2);
    });