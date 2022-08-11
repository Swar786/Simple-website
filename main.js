//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//show/hidden faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'bi bi-plus-lg') {
            icon.className = 'bi bi-book'
        } else{
            icon.className = "bi bi-plus-lg";
        }
    })
})