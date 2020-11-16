const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const oui = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            observer.unobserve(entry.target)
            entry.target.classList.add('visible')
        } else {
            console.log('ninja')
        }
    })
}

const observer = new IntersectionObserver(oui, options);
let p = document.querySelectorAll('.invisible').forEach(function (r) {
    observer.observe(r);
})