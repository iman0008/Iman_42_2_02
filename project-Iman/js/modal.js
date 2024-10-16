const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeIcon = document.querySelector('.modal_close')


const openModals = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModals = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}


modalTrigger.onclick = () => openModals()
closeIcon.onclick = () => closeModals()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModals()
    }
}
let timeout
const openModal10Second =() => {
    clearTimeout(timeout)
    timeout = setTimeout(()=> {
        openModals()
    }, 5000)}
window.onload = openModal10Second;
document.onmousemove = openModal10Second;
document.onscroll = openModal10Second;
document.onclick = openModal10Second;
const checkScrollBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        userReachedBottom();
        window.removeEventListener('scroll', checkScrollBottom);
    }
};

const userReachedBottom = () => {
    openModals()
};

window.addEventListener('scroll', checkScrollBottom);

