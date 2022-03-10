var admonition = document.querySelectorAll('.admonition ul');
admonition.forEach(item => {
    const li = item.querySelectorAll('li');

    if (li.length >= 6) {
        if (li.length > 12) {
            item.classList.add('column-3');
        } else {
            item.classList.add('column-2');
        }
    }
});