const hamburger = document.getElementById("hamburger")
const menuMobile = document.getElementById('menuMobile');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const kataloqMobile = document.getElementById('kataloqMobile');
const kataloqOpenBtn = document.getElementById('kataloqOpenBtn');
const kataloqCloseBtn = document.getElementById('kataloqCloseBtn');
const otherMobile = document.getElementById('otherMobile');
const otherOpenBtn = document.getElementById('otherOpenBtn');
const otherlCloseBtn = document.getElementById('otherCloseBtn');
const user = document.getElementById('user');
const userDeks = document.getElementById('userDeks');
const openCateg = document.getElementById('openCateg');
const closeCateg = document.getElementById('closeCateg');
const categCard = document.getElementById('categCard');


// Create an instance of Notyf
const notyf = new Notyf();



// Burger
window.menuClick = function (status) {
  menuMobile.style.display = status ? "block" : "none";
  menuOpenBtn.style.display = status ? "none" : "block";
  menuCloseBtn.style.display = status ? "block" : "none";
}
window.kataloqClick = function (status) {
  kataloqMobile.style.display = status ? "block" : "none";
  kataloqOpenBtn.style.display = status ? "none" : "block";
  kataloqCloseBtn.style.display = status ? "block" : "none";
}
window.otherClick = function (status) {
  otherMobile.style.display = status ? "block" : "none";
  otherOpenBtn.style.display = status ? "none" : "block";
  otherlCloseBtn.style.display = status ? "block" : "none";
}
window.burger = function (status) {
  hamburger.classList.toggle("hidden", !status);
  document.body.classList.toggle("bg-gray-400", status);
}
// USER 
window.user = function (status) {
  user.classList.toggle("hidden", !status);
}

window.userDeks = function (status) {
  const userMenu = document.getElementById("userDeks");
  userMenu.classList.toggle("hidden", !status);

  if (status) {
    window.addEventListener("click", window.closeOnClickOutsideDeks);
  } else {
    window.removeEventListener("click", window.closeOnClickOutsideDeks);
  }
};


window.closeOnClickOutsideDeks = function (event) {
  const userMenu = document.getElementById("userDeks");
  const userButton = document.querySelector('.hesab');

  if (!userMenu.contains(event.target) && event.target !== userButton) {
    window.userDeks(false);
  }
};

document.querySelector(".hesab").addEventListener("click", function (event) {
  event.stopPropagation();
  window.userDeks(true);
});

// Kataloq
const catData = [
  {
    name: 'Kitablar',
    subCateg:[
      {name:'Bədii ədəbiyyat', subCateg: ['Antologiya','Bioqrafiya, avtobioqrafiya & Xatirə','Detektiv', 'Elmi-fantastika & Fantaziya', 'Fəlsəfə', 'Hekayələr & Oçerklər', 'Kino və teatr', 'Klassik poemalar', 'Klassiklər', 'Komiks', 'Macəra', 'Mifologiya', 'Nağıllar', 'Poemalar', 'Psixologiya', 'Romanlar & Novellalar', 'Satira', 'Tarix, hüquq & Siyasi', 'Tarixi roman', 'Triller, mistika & Qorxu', 'Təhsil, mənbə & Dil']},
      {name:'Qeyri-bədii ədəbiyyat', subCateg: ['Ailə', 'Akademik', 'Aşpazlıq', 'Astronomiya', 'Bağbanlıq', 'Bioqrafiya, avtobioqrafiya & Xatirə', 'Biznes & İqtisadiyyat', 'Detektiv', 'Dini', 'Dəb', 'Elm', 'Ensiklopediyalar & Atlaslar', 'Ezoterika', 'Fəaliyyətlər', 'Fəlsəfə', 'Hekayələr & Esselər', 'Heyvanlar', 'Jurnallar & Qəzetlər', 'Kino və teatr', 'Klassiklər', 'Komiks', 'Kompüter elmləri', 'Mifologiya', 'Musiqi', 'Poemalar', 'Psixologiya', 'Publisistika', 'Qeyri-bədii', 'Regional maraqlar', 'Romanlar & Novellalar', 'Sağlamlıq, tibbi & İdman', 'Sitatlar & Aforizmlər', 'Sosiologiya', 'Sənət, arxitektura, dizayn & Fotoqrafiya', 'Şəxsi inkişaf', 'Səyahət & Məkanlar', 'Tarix, hüquq & Siyasi', 'Tarixi roman', 'Təhsil, mənbə & Dil', 'Xəritələr']},
      {name:'Bədii usaq ədəbiyyat', subCateg: ['3D Kitab', 'Detektiv', 'Elmi-fantastika & Fantaziya', 'Hekayələr & Oçerklər', 'Heyvanlar', 'Klassik poemalar', 'Klassiklər', 'Komiks', 'Macəra', 'Nağıllar', 'Oyuncaq kitablar', 'Poemalar', 'Romanlar & Novellalar', 'Satira', 'Səsli kitab', 'Tarixi roman', 'Triller, mistika & Qorxu', 'Təhsil, mənbə & Dil']},
      {name:'Qeyri-bədii usaq ədəbiyyat', subCateg: ['3D Kitab', 'Ailə', 'Aşpazlıq', 'Astronomiya', 'Bioqrafiya, avtobioqrafiya & Xatirə', 'Biznes & İqtisadiyyat', 'Dini', 'Dəb', 'Elm', 'Ensiklopediyalar & Atlaslar', 'Fəaliyyətlər', 'Fəlsəfə', 'Heyvanlar', 'Jurnallar & Qəzetlər', 'Kino və teatr', 'Klassiklər', 'Komiks', 'Kompüter elmləri', 'Mifologiya', 'Musiqi', 'Nağıllar', 'Oyuncaq kitablar', 'Psixologiya', 'Qeyri-bədii', 'Sağlamlıq, tibbi & İdman', 'Sitatlar & Aforizmlər', 'Sənət, arxitektura, dizayn & Fotoqrafiya', 'Səsli kitab', 'Şəxsi inkişaf', 'Səyahət & Məkanlar', 'Tarix, hüquq & Siyasi', 'Təhsil, mənbə & Dil', 'Xəritələr']},
    ]
  }
];

const outset = document.getElementById("outset")
const popup = document.getElementById("popup")
const catSec = document.getElementById("catSec")
const subCatSec = document.getElementById("subCatSec")
const subSubCatSec = document.getElementById("subSubCatSec")
window.handlePopup = function (status){
  outset.style.display = status ? 'flex' : 'none'
}

outset.addEventListener("click",(e)=>{
  if(!popup.contains(e.target)){
    outset.style.display = 'none'
  }
})


function printCateg(){
  catSec.innerHTML = ''
  catData.forEach(item => catSec.innerHTML +=`<li onmouseover="printSub('${item.name}')" onmouseout="subSubCatSec.innerHTML = ''"  class="flex justify-between items-center p-[10px_20px] hover:text-red-700">${item.name}<span>➤</span></li>`)
}
printCateg()

window.printSub = function(sub){
  subCatSec.innerHTML = ''
  const obj = catData.find(item => item.name == sub)
  obj.subCateg.forEach(item => subCatSec.innerHTML +=`<li onclick="btnCateg('${item.name}')" onmouseover="printSubSub('${sub}', '${item.name}')"   class="flex justify-between items-center p-[10px_20px] hover:text-red-700">${item.name}<span>➤</span></li>`)
}

window.printSubSub = function(sub, subSub){
  subSubCatSec.innerHTML = '';
  const obj = catData.find(item => item.name == sub);
  const subObj = obj.subCateg.find(item => item.name == subSub);
  subObj.subCateg.forEach(item => subSubCatSec.innerHTML +=`<li class="flex justify-between items-center p-[10px_20px] hover:text-red-700">${item}</li>`);
}

window.btnCateg = function(ctg){
  const findCtg = data.kitablar.filter(item=> item.category== ctg)
  console.log(findCtg);
}


























import { getAllBooks, getView } from "./service.js"

let data = []

async function getData() {
  data = await getAllBooks()
  showBooks()
  viewBook()
  best()
}



const cards = document.getElementById("cards")
const viewCard = document.getElementById("viewCard")
const allBook = document.getElementById("allBook")

function showBooks() {
  cards.innerHTML = "";
  const favList = JSON.parse(localStorage.getItem('favList')) || [];
  const filteredBooks = data.kitablar.filter(book => book.sold >= 4);

  filteredBooks.forEach(book => {
    const isFavorite = favList.some(favBook => favBook.id === book.id);
    const heartIconClass = isFavorite ? "fa-solid text-red-500" : "fa-regular text-gray-500";

    cards.innerHTML += `
    <div class="w-45 object-cover rounded-md shadow-md overflow-hidden card p-5 relative">
      <div class="">
        <a>
          <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover "></div>
          <button onclick="toggleFavorite(${book.id})" id="fav-${book.id}" class="absolute top-0 right-[10px] rounded-full p-1">
            <i class="${heartIconClass} fa-heart"></i>
          </button>
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


window.handleView = async (id, view) => {
  await getView(id, { view: (view || 0) + 1 });
  console.log(view);
  await getData();
  window.location.href = `http://127.0.0.1:5500/index.htm`;
  // window.location.href = `http://127.0.0.1:5500/detail.htm?id=${id}`;
};

getData();

function viewBook() {
  viewCard.innerHTML = '';
  const favList = JSON.parse(localStorage.getItem('favList')) || [];
  const filterView = data.kitablar.filter(item => (item.view || 0) >= 1);
  const sortedView = filterView.sort((a, b) => (b.view || 0) - (a.view || 0));

  sortedView.forEach(book => {
    const isFavorite = favList.some(favBook => favBook.id === book.id);
    const heartIconClass = isFavorite ? "fa-solid text-red-500" : "fa-regular text-gray-500";

    viewCard.innerHTML += `
    <div class="w-45 rounded-md shadow-md overflow-hidden card p-5 relative">
      <div class="">
        <a>
        <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-full object-cover "></div>
        <button onclick="toggleFavorite(${book.id})" id="fav-${book.id}" class="absolute top-0 right-[10px] rounded-full p-1">
          <i class="${heartIconClass} fa-heart"></i>
        </button>
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
    </div>`;
  });
}


function best() {
  const allBook = document.getElementById('allBook');
  allBook.innerHTML = "";
  const favList = JSON.parse(localStorage.getItem('favList')) || [];

  data.kitablar.forEach(book => {
      const isFavorite = favList.some(favBook => favBook.id === book.id);
      const heartIconClass = isFavorite ? "fa-solid text-red-500" : "fa-regular text-gray-500";

      allBook.innerHTML += `
      <div class="w-45 rounded-md shadow-md overflow-hidden card p-5 relative" data-book-id="${book.id}">
          <div class="">
              <a>
              <div class="img"><img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover"></div>
              <button onclick="toggleFavorite(${book.id})" id="fav-${book.id}" class="absolute top-0 right-[10px] rounded-full p-1">
                  <i class="${heartIconClass} fa-heart"></i>
              </button>

              </a>
          </div>
          <div class="p-4">
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

function updateFavoriteCount() {
  const favList = JSON.parse(localStorage.getItem('favList')) || [];
  const conutElement = document.getElementById('conut');
  if (conutElement) {
      conutElement.innerHTML = favList.length;
  }
}

// Bu hissesi gpt yazdi
document.addEventListener("DOMContentLoaded", () => {
  best(); 
  updateFavoriteCount(); 
});

window.toggleFavorite = function (id) {
  const favbook = data.kitablar.find(item => item.id == id);
  let favList = JSON.parse(localStorage.getItem('favList')) || [];
  const heartIcon = document.querySelector(`#fav-${id} i`);

  if (favbook) {
      const isAlreadyFavorite = favList.some(book => book.id === id);

      if (isAlreadyFavorite) {
          favList = favList.filter(book => book.id !== id);
          if (heartIcon) {
              heartIcon.classList.remove("fa-solid", "text-red-500");
              heartIcon.classList.add("fa-regular", "text-gray-500");
          }
      } else {
          favList.push(favbook);
          if (heartIcon) {
              heartIcon.classList.remove("fa-regular", "text-gray-500");
              heartIcon.classList.add("fa-solid", "text-red-500");
          }
      }

      localStorage.setItem('favList', JSON.stringify(favList));
      updateFavoriteCount();
  }
  // Swal.fire({
  //   title: "Balimi kesmeyin",
  //   width: 800,
  //   padding: "5em",
  //   color: "black",
  //   background: "#fff url(https://i.pinimg.com/236x/32/65/e9/3265e9310c4a5f720cdc6fc5876a5fa8.jpg)",
  //   backdrop: `
  //     rgba(0,0,123,0.4)
  //     left top
  //     no-repeat
  //   `
  // });
};

window.removeFromFavorites = function(id) {
  let favList = JSON.parse(localStorage.getItem('favList')) || [];
  favList = favList.filter(item => item.id !== id);
  localStorage.setItem('favList', JSON.stringify(favList));


  const bookElementToRemove = document.querySelector(`[data-book-id="${id}"]`);
  if (bookElementToRemove) {
      bookElementToRemove.remove();
  }

  updateFavoriteCount();
};




 



