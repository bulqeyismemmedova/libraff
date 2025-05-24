// LocalStorage üçün set və get funksiyaları


// Səhifə yüklənəndə select-ləri doldur
window.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang");
    const underCategorySelect = document.getElementById("underCategory");

    const langs = getFromStorage("langs");
    const underCategories = getFromStorage("underCategories");

    langs.forEach(lang => {
        langSelect.innerHTML += `<option value="${lang}">${lang}</option>`;
    });

    underCategories.forEach(cat => {
        underCategorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
});

// Kitab əlavə etdikdə həm yaddaşda saxla, həm əlavə et
window.handlePost = async () => {
    const book = getVal();

    // localStorage-ə yaz
    setToStorage("langs", book.lang);
    setToStorage("underCategories", book.underCategory);

    const newItem = await createBook(book);
    if (newItem) {
        data.kitablar.push(newItem);
    }

    printTable();
};

