let prevh3 = null;
document.querySelectorAll('ul > li > h3').forEach((acch3) => {
    acch3.addEventListener('click', () => {
        if (prevh3 && prevh3 !== acch3) {
            prevh3.nextElementSibling.classList.add('hidden');
        }
        acch3.nextElementSibling.classList.toggle('hidden');
        prevh3 = acch3;
    });
});
