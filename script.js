
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    heart.addEventListener('click', () => {
    message.style.display = 'block';
    setTimeout(() => {
    message.style.display = 'none';
}, 30000); // Скрыть сообщение через 3 секунды
});
