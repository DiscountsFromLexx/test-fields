document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');
    const instructionBtn = document.querySelector('.instruction-btn');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    // Прокрутка донизу при натисканні "Інструкції"
    instructionBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Показ/приховування кнопки "ВГОРУ"
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Функція для прокрутки нагору
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Обробка форми
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const field1 = document.getElementById('field1').value;
        const field2 = document.getElementById('field2').value;
        const field3 = document.getElementById('field3').value;
        const field4 = document.getElementById('field4').value;
        const field5 = document.getElementById('field5').value;

        console.log("Ціна:", field1);
        console.log("Знижка:", field2);
        console.log("Додаткові умови:", field3);
        console.log("Посилання:", field4);
        console.log("Коментарі:", field5);

        // Тут можна додати логіку відправки даних до Telegram
    });

    // Автопрокрутка до кнопки при фокусі на інпут
    document.querySelectorAll('input, textarea').forEach((input) => {
        input.addEventListener('focus', () => {
            setTimeout(() => {
                document.querySelector('.submit-btn').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300); // Затримка для iOS
        });
    });
});

// Закриття клавіатури при кліку поза полем вводу
document.addEventListener('click', (e) => {
    if (!e.target.matches('input, textarea')) {
        document.activeElement.blur();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');
    const clearBtn = document.querySelector('.clear-btn');

    // Очищення всіх полів форми при натисканні кнопки "Очистити"
    clearBtn.addEventListener('click', () => {
        form.reset();
    });
});
