    document.getElementById('Main-Button').addEventListener('click', function() {
        currentCount += GLOBAL_BUTTON_Count;
        countText.textContent = currentCount.toFixed(2);
    });