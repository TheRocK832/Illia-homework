let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const imageWidth = document.querySelector('.slider-line img').clientWidth;
const imagesCount = document.querySelectorAll('.slider-line img').length;
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const pagination = document.querySelector('.pagination');

for (let i = 0; i < imagesCount; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i; 
    pagination.appendChild(dot);
}

function updatePagination() {
    const dots = document.querySelectorAll('.pagination .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === offset / imageWidth);
    });
}

function updateButtons() {
    prevButton.disabled = offset === 0;
    nextButton.disabled = offset === imageWidth * (imagesCount - 1);
}

nextButton.addEventListener('click', function () {
    if (offset < imageWidth * (imagesCount - 1)) {
        offset += imageWidth;
        sliderLine.style.transform = `translateX(-${offset}px)`;
        updateButtons();
        updatePagination();
    }
});

prevButton.addEventListener('click', function () {
    if (offset > 0) {
        offset -= imageWidth;
        sliderLine.style.transform = `translateX(-${offset}px)`;
        updateButtons();
        updatePagination();
    }
});

pagination.addEventListener('click', function (event) {
    if (event.target.classList.contains('dot')) {
        const index = parseInt(event.target.dataset.index, 10);
        offset = index * imageWidth;
        sliderLine.style.transform = `translateX(-${offset}px)`;
        updateButtons();
        updatePagination();
    }
});

