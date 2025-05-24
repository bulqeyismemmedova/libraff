async function getAllBooks() {
    try {
        const res = await fetch("db.json")
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}


async function deleteBook(id) {
    try {
        const res = await fetch(`http://localhost:3000/kitablar/${id}`, {
            method: 'DELETE'
        })
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta var`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

async function createBook(book) {
    try {
        const res = await fetch(`http://localhost:3000/kitablar`, {
            method: "PATCH",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta var`)
        }
        
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

async function getEdit(id, book) {
    try {
        const res = await fetch(`http://localhost:3000/kitablar/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta var`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}


async function getView(id, like) {
    await fetch(`http://localhost:3000/kitablar/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(like)
    });
}

async function getLike(id, book) {
    try {
        const res = await fetch(`http://localhost:3000/kitablar/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta var`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

async function getComment(id, book) {
    try {
        const res = await fetch(`http://localhost:3000/comments/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(book)
        })
        if (!res.ok) {
            throw new Error(`${res.status} fetchde xeta var`)
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}









export {
    getAllBooks,
    deleteBook,
    createBook,
    getEdit,
    getView,
    getLike,
    getComment
}

