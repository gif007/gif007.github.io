function dynamicLabels() {
    // show label on input focus, show placeholder on blur
    const inputs = document.querySelectorAll('*[data-column=field]');
    const labels = document.querySelectorAll('label[data-column=label]');

    inputs.forEach((input, index)=>{
        input.addEventListener('focus', ()=>{
            labels[index].style.left = "0px";
            input.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', ()=>{
            labels[index].style.left = "9001px";
            input.setAttribute('placeholder', input.getAttribute('aria-placeholder'));
        });

    });
}

dynamicLabels();