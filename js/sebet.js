const sebet = document.getElementById("sebet");
const totalElement = document.getElementById("totalPrice");


// Create an instance of Notyf
const notyf = new Notyf();

let basketList = JSON.parse(localStorage.getItem('basketList')) || [];

function showFavBook() {
    sebet.innerHTML = "";

    if (basketList.length == 0) {
        sebet.innerHTML = `<p class="text-center text-gray-500">Sebet boşdur.</p>`;
         totalElement.innerHTML = '';
        return;
    }

    let sebetContent = "";

    basketList.forEach(book => {
        const count = book.amount || 1;
        const totalPrice = (parseFloat(book.price) * count).toFixed(2);

        sebetContent += `
        <div class="flex items-center py-6 border-b justify-between">
            <div class="w-24 h-32 mr-4 shadow-md rounded-md overflow-hidden imgSebet">
                <img src="${book.img}" alt="${book.name}" class="w-full h-full object-cover">
            </div>

            <div class="flex-grow">
                <div class="flex items-center mb-1">
                    <a href="#" class="text-lg font-semibold text-gray-800 hover:text-red-600">${book.name}</a>
                    <span class="ml-1 text-xs text-red-500">🔥</span>
                </div>
                <p class="text-sm text-gray-600">Kod: 9789952573046</p>
                <button class="bg-red-100 text-red-500 text-xs py-1 px-2 rounded-md mt-2">Endirim</button>
            </div>

            <div class="text-right mr-6">
                <span class="text-lg font-semibold text-red-600">${book.price}₼</span>
            </div>

            <div class="mr-6">
                <input type="number" value="${count}" min="1" class="w-16 text-center border rounded-md" onchange="total(${book.id}, this.value)">
            </div>

            <div class="font-semibold text-gray-800 text-right price-${book.id}">${totalPrice} ₼</div>
        </div>`;
    });

    sebet.innerHTML = sebetContent;
    calculateTotalBasket();
}

function calculateTotalBasket() {
    let total = 0;
    basketList.forEach(book => {
        const price = parseFloat(book.price);
        const count = book.amount || 1;
        total += price * count;
    });

    if (totalElement) {
        totalElement.innerHTML = `Cəmi: ${total} ₼`;
    }
}

window.total = function (id, amount) {
    const book = basketList.find(item => item.id == id);
    if (book) {
        const count = parseInt(amount);
        book.amount = count;
        const totalPrice = (parseFloat(book.price) * count).toFixed(2);

        const priceElement = document.querySelector(`.price-${id}`);
        if (priceElement) {
            priceElement.innerHTML = `${totalPrice} ₼`;
        }

        localStorage.setItem('basketList', JSON.stringify(basketList));
        calculateTotalBasket();
    }
};

window.ctn = () => {
    window.location.href = './index.htm';
};

window.clr = () => {
    basketList = [];
    localStorage.setItem('basketList', JSON.stringify(basketList));
    showFavBook();
};

window.end = ()=>{
    basketList = []
    localStorage.setItem('basketList', JSON.stringify(basketList))
    showFavBook()
    Swal.fire({
        title: "Successful",
        icon: "success",
        draggable: true
      });
}

showFavBook();
