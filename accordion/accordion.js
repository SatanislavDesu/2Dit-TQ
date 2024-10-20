document.querySelectorAll('.accordion_header').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode

        if (parent.classList.contains('accordion_item__show')) {
            parent.classList.remove('accordion_item__show');
        } else {
            document.querySelectorAll('.accordion_item')
                .forEach((child) => child.classList.remove('accordion_item__show'))
            parent.classList.toggle('accordion_item__show');
        }
    })
);