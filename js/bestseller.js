import { getAllBooks } from "./service.js"

let data = []
async function bestData(){
    data = await getAllBooks()
    showBooks()
}


const book = document.getElementById('book')  
function showBooks(){
    book.innerHTML = ''
    const filteredBooks = data.kitablar.filter(book => book.sold >=5);
    filteredBooks.forEach(item => {
        book.innerHTML += `<li class=" gap-10">
        <a onclick="showBook(${item.id})" href="#" class="text-xl font-semibold ">${item.name}-${item.category},${item.lang[0]} dilinde</a><br>
        <div class="inlineOl text-sm calendar bg-[#767676]">📅 Aprel 2, 2025</div><br>
        <a href="#" class="underline text-red-700 text-lg">Ətrafli</a>
        </li>
        `
    });
};
bestData()

window.showBook = function(id){
    const book = data.kitablar.find(item => item.id == id)
    window.location.href = `http://127.0.0.1:5500/detail.htm?id=${id}`;
 
}