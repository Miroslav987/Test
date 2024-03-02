const API ="https://jsonplaceholder.typicode.com/users"

// теги пользователей
let users = document.getElementById("users_block")
let userOne = document.getElementById("user_One_block")

// кнопки и инпуты
let btn_more = document.getElementById("btn_more")
let btn_update = document.getElementById("update")
let search = document.getElementById("search")


// ! =============== Поиск ==================
search.addEventListener("input",()=>{
    readUser()
})




// ! =============== Обновление пользователей ==================
btn_update.addEventListener("click",()=>{
    readUser
})



// ! =============== readUser ==================

function readUser() {
    fetch(`${API}?q=${search.value}`).then((response) => {
        return response.json();
    })
        .then((data) => {
            users.innerHTML=""
            userOne.innerHTML=""
            data.map(item=> (
                users.innerHTML  +=`
                    <section  id="users_card">

                        <section id="users">
                            <h2> ${item.name} ${item.username}</h2>
                            <h3> <img src="./icons/email.png"/> ${item.email}</h3>
                            <h3> <img src="./icons/phone.png"/> ${item.phone}</h3>
                        </section>

                        <button onClick="readOneUser(${item.id})" id="btn_more">
                        Подробнее</button>

                        <section id="users">
                            <h4> Company: ${item.company.name}</h4>
                        </section>
                    </section>
                `
            ))
        })
        .catch(error=>{
            users.innerHTML =""
            users.innerHTML  +=`
            <p id="error"> ${error}</p>
        `
        })
        
}
readUser()
// ? =============== readUser ==================


// ! =============== readOneUser ==================
let geo;
let address;
let company;

function readOneUser(id) {
    fetch(`${API}/${id}`).then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log(data);
        address =data.address
        geo =address.geo
        company =data.company

        users.innerHTML =""
        userOne.innerHTML  +=`
            <section class="user_One">
                <h2>User</h2>
                <p>name: ${data.name}</p>
                <p>username: ${data.username}</p>
                <p>email: ${data.email}</p>
                <p>phone: ${data.phone}</p>
                <p>website: ${data.website}</p>
                </section>

            <section class="user_One">
                <h2>Address</h2>
                <p>street: ${address.street}</p>
                <p>suite: ${address.suit}</p>
                <p>city: ${address.city}</p>
                <p>zipcode: ${address.zipcode}</p>
                <p>geo: lat=${geo.lat} lng=${geo.lng}</p>
            </section>

            <section class="user_One">
                <h2>Company</h2>
                <p>name: ${company.name}</p>
                <p>catchPhrase: ${company.catchPhrase}</p>
                <p>bs: ${company.bs}</p>
            </section>

            <button onClick="readUser()" id="btn_close">X</button>
        `
        });

}
// ? =============== readOneUser ==================


