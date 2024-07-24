    const countText = document.getElementById('Card-count-Text'); // Получаем элемент счетчика
    const card1 = document.querySelector('.card1'); // Получаем карточку 1
    let isCountingDown = false; // Флаг для отслеживания, идет ли отсчет времени
    function handleCardClick() {
        if (isCountingDown) return; // Если отсчет уже идет, ничего не делаем
        if (currentCount <= 2.80){
            return
        }

        const cardText = this.querySelector('p');
        timeLeft = 60; // Сбрасываем время при каждом клике на карточку
        cardText.textContent = `${timeLeft}`;
        isCountingDown = true; // Устанавливаем флаг, что отсчет начался
        currentCount -= 2.80
        const countdown = setInterval(() => {
            timeLeft--;
            cardText.textContent = `${timeLeft}`;
            currentCount += GLOBAL_BUTTON_Count;
            countText.textContent = currentCount.toFixed(2);
            if (timeLeft <= 0) {
                clearInterval(countdown);
                cardText.textContent = `Автоматически добывает Z-коины`;
                isCountingDown = false; // Сбрасываем флаг, когда отсчет завершен
            }
        }, 1000);
    }

    // Добавляем обработчик события для карточки 1
    card1.addEventListener('click', handleCardClick);
