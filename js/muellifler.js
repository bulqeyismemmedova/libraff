import { getAllBooks } from "./service.js";

let data = [];
let authorArr = new Set()
let letterArr = new Set();
const letter = document.getElementById('letter')

async function getData() {
    data = await getAllBooks();
    showAuthor();
}

function showAuthor() {
    data.kitablar.forEach(item => {
        letterArr.add(item.author[0]);
        authorArr.add(item.author)
    });
    let sortLetterArr= Array.from(letterArr).sort()
    let sortAuthorArr = Array.from(authorArr).sort()
    console.log(sortLetterArr);
    console.log(sortAuthorArr);

    letter.innerHTML = ""
    let section = ""
    sortLetterArr.forEach(letter=>{
        section += `<div class="my-8 grid grid-cols-4"><h3 class="font-bold text-[24px]">${letter}</h3></div>`
        sortAuthorArr.forEach(author=>{
            if(author[0]=== letter){
                section += `<div class=""><a onclick="showBook('${author}')" href="#" class="text-red-700 text-[16px]">${author}</a></div>`
            }
        })
    })
    letter.innerHTML = section
}
const authorBook = document.getElementById('authorBook')
window.showBook = function(author){
    authorBook.innerHTML= ''
    const ctgAuthor = data.kitablar.filter(item=> item.author == author)
    ctgAuthor.forEach(book=>{
        authorBook.innerHTML+=`<div class="w-50 rounded-md shadow-md overflow-hidden card p-5 relative my-10">
        <div class="">
          <a>
          <div><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto "></div>
          </a>
        </div>
        <div class="p-4">
          <a  onclick="handleView(${book.id || ""}, ${book.view || 0})" class="text-sm font-semibold text-gray-800 truncate cursor-pointer">${book.name || ''}</a>
          <p class="text-xs text-gray-600 truncate">${book.author || ''}</p>
          <div class="flex items-center mt-2 text-yellow-500 starView">
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="#FFFF00">
          <path d="M10 15l-5.878 3.09 1.175-5.928L.5 8.267l6.064-.647L10 2.17l3.436 5.45 6.064.647-4.793 4.195 1.175 5.928z"/>
      </svg>
            <span class="text-gray-500 ml-1 text-xs">${book.star || ''}</span>
          </div>
          <p class="mt-1 text-sm font-medium text-gray-900">${book.price || ''} AZN</p>
        </div>
      </div>`
    })
}








getData();
