const favBook = document.getElementById('favBook');
let favList = JSON.parse(localStorage.getItem('favList')) || [];

console.log(favList);



function showFavBook() {
  favBook.innerHTML = "";

  if (favList.length === 0) {
    favBook.innerHTML = `<p class="text-center text-gray-500">Favoriləriniz boşdur.</p>`;
    return;
  }

  favList.forEach(book => {
    favBook.innerHTML += `
      <div class="w-45 rounded-md shadow-md overflow-hidden card p-5 relative" data-id="${book.id}">
        <div class="">
          <a onclick="handleView(${book.id || ""}, ${book.view || 0})">
            <div>
              <img src="${book.img || ''}" alt="${book.name || ''}" class="w-full h-auto object-cover">
            </div>
          </a>
          <button onclick="removeFromFavorites(${book.id})" id="fav" class="absolute top-0 right-[10px] rounded-full p-1 text-[#767676] hover:text-red-700">
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="p-4">
          <a class="text-sm font-semibold text-gray-800 truncate cursor-pointer">${book.name || ''}</a>
          <p class="text-xs text-gray-600 truncate">${book.author || ''}</p>
          <div class="flex items-center mt-2 text-yellow-500 starView">
            <svg class="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.175-5.928L.5 8.267l6.064-.647L10 2.17l3.436 5.45 6.064.647-4.793 4.195 1.175 5.928z"/>
            </svg>
            <span class="text-gray-500 ml-1 text-xs">${book.star || ''}</span>
          </div>
          <p class="mt-1 text-sm font-medium text-gray-900">${book.price || ''} AZN</p>
        </div>
      </div>`;
  });
}

showFavBook();

window.removeFromFavorites = function(id) {
  favList = favList.filter(item => item.id !== id);
  localStorage.setItem('favList', JSON.stringify(favList));
  document.querySelector(`[data-id="${id}"]`).remove();
};
