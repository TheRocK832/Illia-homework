const container = document.getElementById('btn-container');

container.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        const button = target.getAttribute('data-id');
        alert(`Ви клікнули на кнопку ${button}`);
    }
});