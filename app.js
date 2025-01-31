document.addEventListener('click', (e) => {
    // Якщо клік не в полі вводу, приховати клавіатуру
    if (!e.target.matches('input, textarea')) {
        document.activeElement.blur(); // Забирає фокус з поля
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');
    const instructionBtn = document.querySelector('.instruction-btn');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    // Прокрутка донизу при натисканні "Інструкції"
    instructionBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Показ/приховування кнопки "ВВЕРХ"
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Функція для прокрутки нагору
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const field1 = document.getElementById('field1').value;
        const field2 = document.getElementById('field2').value;
        const field3 = document.getElementById('field3').value;
        const field4 = document.getElementById('field4').value;
        const field4 = document.getElementById('field5').value;

        console.log("Field 1:", field1);
        console.log("Field 2:", field2);
        console.log("Field 3:", field3);
        console.log("Field 3:", field4);
        console.log("Field 3:", field5);

        // Here you can add the logic to process the input data or send it to a server
    });
});

document.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('focus', () => {
        // Прокручуємо до кнопки
        setTimeout(() => {
            document.querySelector('.submit-btn').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300); // Затримка для коректної роботи на iOS
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".instruction-btn, .hide-keyboard-btn");
    const submitBtn = document.querySelector(".submit-btn");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                buttons.forEach(button => {
                    button.style.transform = "translateY(100px)"; // Піднімаємо обидві кнопки вгору
                });
            } else {
                buttons.forEach(button => {
                    button.style.transform = "translateY(0)"; // Повертаємо на місце
                });
            }
        },
        { root: null, threshold: 0.1 }
    );

    observer.observe(submitBtn);
});


