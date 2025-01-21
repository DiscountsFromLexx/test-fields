document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');

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
