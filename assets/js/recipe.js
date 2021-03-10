function dynamicLabels() {
    // show label on input focus, show placeholder on blur
    const inputs = document.querySelectorAll('*[data-column=field]');
    const labels = document.querySelectorAll('label[data-column=label]');

    inputs.forEach((input, index)=>{
        input.addEventListener('focus', ()=>{
            labels[index].style.left = "16px";
            input.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', ()=>{
            labels[index].style.left = "9001px";
            input.setAttribute('placeholder', input.getAttribute('aria-placeholder'));
        });

    });
}


function submitAction() {
    // replacing default behaviour of submit button
    const submit = document.querySelector("button[type=submit");
    submit.addEventListener('click', (e)=> {
        e.preventDefault();
        console.log('Running code...');
    });
}


function dynamicInputs() {
    // Setting global variables
    const ingredientButton = document.querySelector('button#addingredient');
    const ingredientInput = document.querySelector('input#ingredient');
    const ingredientList = document.querySelector('ul#ingredientlist');

    const directionButton = document.querySelector('button#adddirection');
    const directionInput = document.querySelector('input#direction');
    const directionList = document.querySelector('ol#directionlist');


    function makeListItem(content) {
        // Return a list item containing user input
        const item = document.createElement('li');
        item.textContent = content;

        return item;
    }


    function makeCloseButton() {
        // Return a button that removes its parent element
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = '×';
        button.onclick = function () {
            button.parentNode.remove();
        }

        return button;
    }


    function addToIngredients() {
        // Add user input to the list
        if (!ingredientInput.value) {return};
        const item = makeListItem(ingredientInput.value);
        ingredientInput.value = '';
        item.appendChild(makeCloseButton());
        ingredientList.appendChild(item);
        ingredientInput.focus();
    }

    function addToDirections() {
        // Add user input to the list
        if (!directionInput.value) {return};
        const item = makeListItem(directionInput.value);
        directionInput.value = '';
        item.appendChild(makeCloseButton());
        directionList.appendChild(item);
        directionInput.focus();
    }


    // Initializing event listeners
    ingredientButton.addEventListener('click', addToIngredients);
    directionButton.addEventListener('click', addToDirections);
}

function createPreview() {
    const title = document.createElement('h1');
    title.innerHTML = document.querySelector('input#title').value;

    const yield = document.createElement('p');
    yield.innerHTML = document.querySelector('input#yield').value;

    const description = document.createElement('p');
    description.innerHTML = document.querySelector('textarea#description').value;

    const ingredients = document.createElement('ul');
    document.querySelectorAll('ul li').forEach(item=>{
        let li = document.createElement('li');
        li.innerHTML = item.firstChild.data;
        ingredients.append(li);
    })

    const directions = document.createElement('ol');
    document.querySelectorAll('ol li').forEach(item=>{
        let li = document.createElement('li');
        li.innerHTML = item.firstChild.data;
        directions.append(li);
    })

    return {title, yield, description, ingredients, directions};
}

function displayPreview(preview) {
    const form = document.querySelector('form');
    form.style.display = "none";

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerHTML = 'Go back';
    button.addEventListener('click', ()=>{
        button.parentNode.remove();
        form.style.display = "flex";
    })

    const display = document.createElement('div');
    display.style.cssText = 'margin: 3rem; border: 1px solid black;';
    display.append(preview.title, preview.yield, preview.description, preview.ingredients, preview.directions, button);
    document.querySelector('body').append(display);

    


}


dynamicLabels();
dynamicInputs();
submitAction();
document.querySelector('button#preview').addEventListener('click', ()=>{
    let preview = createPreview();
    displayPreview(preview);
});
