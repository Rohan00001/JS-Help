// Change text content using getElementById
let textChangeButton = document.getElementById('changeTextButton');
textChangeButton.addEventListener('click', () => {
    const paragraph = document.getElementById('content').querySelector('p');
    paragraph.textContent = 'The text has been changed!';
});

// Change color of the first paragraph using querySelector
document.getElementById('changeColorButton').addEventListener('click', () => {
    const paragraph = document.querySelector('.text');
    paragraph.style.color = 'red';
});

// Toggle visibility using getElementsByClassName
document.getElementById('toggleVisibilityButton').addEventListener('click', () => {
    const paragraphs = document.getElementsByClassName('text');
    Array.from(paragraphs).forEach(p => p.classList.toggle('hidden'));
});

// Create a new element and add it to the DOM
document.getElementById('addElementButton').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph.';
    document.getElementById('content').appendChild(newElement);
});

// Remove the last element with tag name 'p'
document.getElementById('removeElementButton').addEventListener('click', () => {
    const paragraphs = document.getElementsByTagName('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();
});
