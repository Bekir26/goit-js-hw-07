const categoriesDOM = document.getElementById('categories');
const childElements = [...categoriesDOM.children].filter(child => child.classList.contains('item'));

console.log('Number of Categories:', childElements.length);

childElements.forEach(childElement => {
    const categoryTitle = childElement.querySelector('h2').textContent;
    const elementsCount = childElement.querySelector('ul').children.length;

    console.log('Category:', categoryTitle);
    console.log('Elements:', elementsCount);
});
