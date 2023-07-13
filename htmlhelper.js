'use strict'
console.log("HelloWorld!");

const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');
const pageParagraph = document.getElementById('textOutput');



const pageList = document.getElementById('myList');

let addToList =(str)=> {

        let el = document.createElement('li');
            el.innerText = str;
                pageList.appendChild(el);

}
let changeText =str=> pageParagraph.innerText = `${str}`;

pageButton.onclick =()=> addToList(pageInput.value);

