import { getAllBooks , deleteBook,createBook,getEdit} from "./service.js"



let tbody = document.getElementById("tbody")
let form = document.querySelectorAll("#form input")
let category = document.getElementById("category")
let editModal = document.getElementById('editModal')
let editInps = document.querySelectorAll('#editModal input')
let data = []
async function getData(){
    data = await getAllBooks()
    console.log(data);
    printTable()
}

getData()
function printTable() {
    tbody.innerHTML = ''
    data.kitablar.map(item => {
        tbody.innerHTML += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 py-10">
                                <td class="px-6 py-14 flex items-center">
                                    ${item.name}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.author}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.desc}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.category}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.underCategory}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.price}₼
                                </td>
                                <td class="px-6 py-1">
                                    ${item.stok}
                                </td>
                                <td class="px-6 py-1">
                                    ${item.lang}
                                </td>
                                <td class=" w-[50px]">
                                    <img class="w-full h-[50px] object-cover" src="${item.img}" />
                                </td>
                                <td class="px-6 py-1 text-[25px] flex gap-5 items-center">
                                <i onclick="handleModal(${true},'${item.id}')"  data-modal-target="edit-modal"  data-modal-toggle="edit-modal" class="fa-solid fa-pen-to-square text-[green] cursor-pointer"></i>     
                                <i onclick="handleDelete('${item.id}')" class="fa-solid fa-trash text-[red]"></i>
                                  </td>
                                  </tr>
                        
                            `
    })
}
window.handleDelete = async (id) => {
    await deleteBook(id)
    data = data.kitablar.filter(item => item.id!=id)
    printTable()
}

window.handlePost = async () => {
    // tbody.innerHTML = ''
    const book = getVal()
    console.log(book);
    const newElemetn = await createBook(book)
    if (newElemetn) {
        data.push(newElemetn)
    } else {
        tbody.innerHTML = `
                        <div class="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                            <div class="h-48 rounded-t dark:bg-gray-300"></div>
                            <div class="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                                <div class="w-full h-6 rounded dark:bg-gray-300"></div>
                                <div class="w-full h-6 rounded dark:bg-gray-300"></div>
                                <div class="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                            </div>
                        </div>
                     `;
    }
    printTable()
}


function getVal() {
    let form = document.querySelectorAll("#form input, #form textarea, #form select");
    const book = {
        name: document.querySelector("#name").value,
        author: document.querySelector("#author").value,
        img: document.querySelector("#img").value,
        price: document.querySelector("#price").value,
        stok: document.querySelector("#Stok").value,
        category: document.querySelector("#category").value,
        underCategory: document.querySelector("#underCategory").value,
        lang: document.querySelector("#lang").value,
        desc: tinymce.get('mytextarea').getContent(),
    }
    return book;
}





window.handleModal = (status, id) => {
    editModal.style.display = status ? 'flex' : 'none';
    const element = data.kitablar.find(item => item.id == id);
    editInps[0].value = element.name;
    editInps[1].value = element.author;
    editInps[2].value = element.desc;
    editInps[3].value = element.category;
    editInps[4].value = element.underCategory;
    editInps[5].value = element.price;
    editInps[6].value = element.stok;
    editInps[7].value = element.img;
    editInps[8].value = JSON.stringify(element.lang);

    window.handleEdit = async () => {
        const editObj = getValEdit();
        await getEdit(id, editObj);
        data = await getAllBooks();
        printTable();
    };
};

function getValEdit() {
    const book = {
        name: editInps[0].value,
        author: editInps[1].value,
        desc: editInps[2].value,
        category: editInps[3].value,
        underCategory: editInps[4].value,
        price: editInps[5].value,
        stok: editInps[6].value,
        img: editInps[7].value,
        lang: JSON.parse(editInps[8].value)
    };
    return book;
}
