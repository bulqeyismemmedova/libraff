import { getAllBooks } from "./service.js"

const params = location.search
const id = new URLSearchParams(params).get('id')
let data = []

// Create an instance of Notyf
const notyf = new Notyf();
const query = window.location.search




const showBook = document.getElementById("showBook")
const reyBook = document.getElementById("reyBook")
const comments = document.getElementById("comments")

async function getData() {
  data = await getAllBooks()
  printBook()
}
getData()

function printBook() {
  const findBook = data.kitablar.find(item => item.id == id);
  showBook.innerHTML = `
        <div class="flex flex-col md:flex-row  rounded-md shadow-md overflow-hidden">
            <div class="md:w-1/2">
                <img src="${findBook.img}" alt="${findBook.name}" class="w-full h-auto object-cover">
            </div>
            <div class="p-6 md:w-1/2 flex flex-col gap-10">
                <div>
                    <h2 class="name">${findBook.name}</h2>
                    <p class="text-gray-600 mb-4">${findBook.author}</p>
                    <div class="flex items-center mb-4">
                        <p class="text-2xl font-semibold text-red-600">${(findBook.price * 0.8).toFixed(2)} ₼</p>
                        <p class="text-sm text-gray-500 ml-2 line-through">${findBook.price} ₼</p>
                        <span class="bg-red-100 text-red-600 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">-20%</span>
                    </div>
                </div>
                <div>
                    <button onclick="soldBook(${findBook.id})" class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[40%] focus:outline-none focus:shadow-outline mb-2 sebet" type="button">
                    🛒 Səbətə əlavə et
                    </button>
                    <button onclick="favBook(${findBook.id})" class="w-full bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline sebet" type="button">
                        Seçilmişlərə əlavə et
                    </button>
                    <div class="mt-10  text-gray-600">
                        <h3 class="font-bold mb-1 text-[18px]">Çatdırılma haqqında</h3>
                        <p>Bakı şəhəri üçün təxmini müddət və qiymətlər:</p>
                        <ul class="list-disc list-inside">
                            <li>🏪 Mağazadan təhvil alma - <span class="font-semibold">pulsuz</span></li>
                            <li>🚚 Kuriyer ilə - operator təsdiqindən sonra <span class="font-semibold">24 saat ərzində, 30 AZN və</span>
                                sifarişlərdə - <span class="font-semibold">pulsuz</span></li>
                            <li>Bölgələrə çatdırılma 3-5 iş günü ərzində.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;

}


const content = document.getElementById("content")
window.showTesvir = function () {
  const findBook = data.kitablar.find(item => item.id == id);
  content.innerHTML = `<div class="desc">${findBook.desc}</div>`
}
window.feature = function () {
  const findBook = data.kitablar.find(item => item.id == id);
  content.innerHTML = `<div>
    
    <ul class="grid grid-cols-2 gap-10">
    <li><span class="font-semibold">Cild:</span> Yumşaq</li>
    <li><span class="font-semibold">Dil:</span> AZ</li>
    <li><span class="font-semibold">Müəllif:</span> ${findBook.author}</li>
    <li><span class="font-semibold">Nəşriyyat:</span> Teas Press</li>
    <li><span class="font-semibold">Səhifə sayı:</span> 380</li>
    <li><span class="font-semibold">Yaş:</span> 16+</li>
  </ul>    
    </div>`
}
const newComment = document.getElementById('newComment')
window.commentBook = function () {
  const findBook = data.kitablar.find(item => item.id == id);
  if (findBook && content) {
    const filteredComments = data.comments.filter(comment => comment.bookId == id);

    if (filteredComments.length > 0) {
      content.innerHTML = ''
      let user = ''
      filteredComments.forEach(item => {
        item.comments.forEach(rey => {
          content.innerHTML += `<div class="userComment flex flex-col gap-5" >💬 USER:<div class=""> 
          ${rey.text}</div></div>`

        })
      })
    } else {
      content.innerHTML = `<div>Bu kitab üçün hələ rəy yoxdur.</div>`
    }
  }
  content.innerHTML += `<div class="rounded-md p-6 shadow-sm text-center">
  <h2 class="text-lg font-semibold text-gray-800 mb-1">Məhsul haqqında rəy yazın</h2>
  <p class="text-sm text-gray-500 mb-4">Fikirlərinizi digər istifadəçilərlə bölüşün</p>
  <button onclick = 'newCom()' class="rey">
    Rəy yaz
  </button>
</div>`
}




















let favList = JSON.parse(localStorage.getItem('favList')) || [];


window.favBook = function (id) {
  const favbook = data.kitablar.find(item => item.id == id);
  if (favbook) {
    const isAlreadyFavorite = favList.some(book => book.id === id);
    if (!isAlreadyFavorite) {
      favList.push(favbook);
      localStorage.setItem('favList', JSON.stringify(favList));
    }
  }
  Swal.fire({
    title: "Balimi kesmeyin",
    width: 800,
    padding: "5em",
    color: "black",
    background: "#fff url(https://i.pinimg.com/236x/32/65/e9/3265e9310c4a5f720cdc6fc5876a5fa8.jpg)",
    backdrop: `
      rgba(0,0,123,0.4)
      left top
      no-repeat
    `
  });
};
let basketList = JSON.parse(localStorage.getItem('basketList')) || [];
window.soldBook = function (id) {
  const buybook = data.kitablar.find(item => item.id == id);
  if (buybook) {
    const isAlreadyFavorite = basketList.some(book => book.id === id);
    if (!isAlreadyFavorite) {
      basketList.push(buybook);
      localStorage.setItem('basketList', JSON.stringify(basketList));
    }
  }
  Swal.fire({
    title: "Successful",
    icon: "success",
    draggable: true
  });
};



