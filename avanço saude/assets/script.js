const submitBairro = document.querySelector("#submit-bairro")
const inputSelect = document.querySelector("#input-select")
const sectionIframe = document.querySelector("#section-iframe")
const iframe = document.querySelector(".iframe")


function submit () {
    
    iframe.classList.add("remove")
    
    if (inputSelect.value == (1)) {
        sectionIframe.innerHTML('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.979612873918!2d-53.502925712960774!3d-28.290808295275177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fdacca58127299%3A0x2c6f9e8d95134876!2sSupermercado%20Cotripal!5e0!3m2!1spt-BR!2sbr!4v1716420465112!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
    }
}

