const categories = document.querySelector("#categories");
console.log(`У списку ${categories.children.length} категорії`);

for (const item of categories.children) {
    console.log(`Категорія: ${ item.firstElementChild.innerHTML }`);
    console.log(`Кількість елементів ${item.lastElementChild.children.length}`);
}