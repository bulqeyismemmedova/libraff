import { getAllBooks } from "./service.js"

let data = []
let categoryArr = new Set()
let underCtgArr = new Set()

async function getData(){
    data = await getAllBooks()
    showCategory()
    showLink('Bədii ədəbiyyat')
    filterData()
    stokBook()
}
getData()


const kateg = document.getElementById("kateg")
const allBook = document.getElementById("allBook")


function showCategory(){
    data.kitablar.forEach(category => {
        categoryArr.add(category.category)
    })
    let sortCateg = Array.from(categoryArr).sort()
    let sortUnderCtgArr = Array.from(underCtgArr).sort()
    console.log(sortCateg);
    console.log(sortUnderCtgArr);
   sortCateg.forEach(item=>{
    kateg.innerHTML += `<a onclick="showLink('${item}')" href="#" class="flex justify-between items-center p-[10px_20px] hover:text-red-700">${item}</a>`
   })

}

window.showLink = function(x){
    const filterData = data.kitablar.filter(book => book.category == x);
    // console.log(filterData);
    allBook.innerHTML = ''; 
    filterData.forEach(book => {
        allBook.innerHTML += `<div class="w-45 object-cover rounded-md shadow-md overflow-hidden card p-5 relative">
            <div class="">
                <a>
                    <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover "></div>
                </a>
            </div>
            <div class="py-2 px-4">
                <a onclick="handleView(${book.id || ""}, ${book.view || 0})" class="text-sm font-semibold text-gray-800 truncate cursor-pointer">${book.name || ''}</a>
                <p class="text-xs text-gray-600 truncate">${book.author || ''}</p>
                <div class="flex items-center mt-2 text-yellow-500 starView">
                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="#FFFF00">
                        <path d="M10 15l-5.878 3.09 1.175-5.928L.5 8.267l6.064-.647L10 2.17l3.436 5.45 6.064.647-4.793 4.195 1.175 5.928z"/>
                    </svg>
                    <span class="text-gray-500 ml-1 text-xs">${book.star || ''}</span>
                </div>
                <p class="mt-1 text-sm font-medium text-gray-900">${book.price || ''} AZN</p>
            </div>
        </div>`;
    });
}


let languageArr = new Set();
const language = document.getElementById('language');

function filterData() {
  data.kitablar.forEach(item => {
    item.lang?.forEach(lang => languageArr.add(lang));
  });

  languageArr.forEach(langCode => {
    language.innerHTML += `
      <div>
        <input oninput="chckLang('${langCode}')" type="checkbox" id="${langCode}" name="language" value="${langCode}">
        <label class="text-[#647289]" for="${langCode}">${langCode}</label>
      </div>
    `;
  });
}
window.chckLang = function(x){
    const filterlang = data.kitablar.filter(item=> item.lang == x)
    allBook.innerHTML = ''; 
    filterlang.forEach(book => {
        allBook.innerHTML += `<div class="w-45 object-cover rounded-md shadow-md overflow-hidden card p-5 relative">
            <div class="">
                <a>
                    <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover "></div>
                </a>
            </div>
            <div class="py-2 px-4">
                <a onclick="handleView(${book.id || ""}, ${book.view || 0})" class="text-sm font-semibold text-gray-800 truncate cursor-pointer">${book.name || ''}</a>
                <p class="text-xs text-gray-600 truncate">${book.author || ''}</p>
                <div class="flex items-center mt-2 text-yellow-500 starView">
                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="#FFFF00">
                        <path d="M10 15l-5.878 3.09 1.175-5.928L.5 8.267l6.064-.647L10 2.17l3.436 5.45 6.064.647-4.793 4.195 1.175 5.928z"/>
                    </svg>
                    <span class="text-gray-500 ml-1 text-xs">${book.star || ''}</span>
                </div>
                <p class="mt-1 text-sm font-medium text-gray-900">${book.price || ''} AZN</p>
            </div>
        </div>`;
    });
}
function stokBook(){
    const filterstok = data.kitablar.filter(item => item.stok >= 1);
    allBook.innerHTML = '';

    if (filterstok.length > 0) {
        filterstok.forEach(book => {
            allBook.innerHTML += `<div class="w-45 object-cover rounded-md shadow-md overflow-hidden card p-5 relative">
                <div class="">
                    <a>
                        <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover "></div>
                    </a>
                </div>
                <div class="py-2 px-4">
                    <a onclick="handleView(${book.id || ""}, ${book.view || 0})" class="text-sm font-semibold text-gray-800 truncate cursor-pointer">${book.name || ''}</a>
                    <p class="text-xs text-gray-600 truncate">${book.author || ''}</p>
                    <div class="flex items-center mt-2 text-yellow-500 starView">
                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="#FFFF00">
                            <path d="M10 15l-5.878 3.09 1.175-5.928L.5 8.267l6.064-.647L10 2.17l3.436 5.45 6.064.647-4.793 4.195 1.175 5.928z"/>
                        </svg>
                        <span class="text-gray-500 ml-1 text-xs">${book.star || ''}</span>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">${book.price || ''} AZN</p>
                </div>
            </div>`;
        });
    } else {
        allBook.innerHTML = '<p>Hal-hazırda stokda kitab mövcud deyil.</p>';
    }
}