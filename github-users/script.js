const Api = "https://api.github.com/users/";
const form = document.querySelector("#form");
const search = document.getElementById("search");
const mainTag = document.querySelector("#main");

async function getUser(user){

    try{
        const { data } = await axios(Api + user);
        createCard(data);
        console.log(data);
    }catch(err){
        createError("Wrong username");
    };
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    if(user) {
        getUser(user);
        search.value = "";
    };
});

function createError(message){
    const errorCard = `
        <div class="card">
            <h2>${message}</h2>
        </div>
    `
    mainTag.innerHTML=errorCard;
};

function createCard(data){
    const card = `
        <div class="card">

            <div><img src="${data.avatar_url}" class="pic" alt="User" width="100px" height="100px"></div>
            
            <div class="user-info">
                <h3>${data.name}</h3>
                <p>${data.bio}</p>
                <ul>
                    <li>${data.followers} <b>Followers</b></li>
                    <li>${data.following} <b>Following</b></li>
                    <li>${data.public_repos} <b>Repos</b></li>
                </ul>

            </div>

        </div>
    `
    mainTag.innerHTML = card;

};