const characters = document.querySelector('.characters');

const api_url = 'https://swapi.dev/api/people/';


const charImgs = [
    "./week2-images/index.jpg",
    "./week2-images/c-3po.jpg",
    "./week2-images/r2-d2.jpg",
    "./week2-images/darth-vader.jpg",
    "./week2-images/organa.jpg",
    "./week2-images/owen.jpg",
    "./week2-images/whitesun.jpg",
    "./week2-images/r5-d4.jpg",
    "./week2-images/darklighter.jpg",
    "./week2-images/kenobi.jpg",
]
//fetch data and convert to json
async function fetchUrl(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(err => {console.log(err)})
}

const addClick = () => {
     document.querySelectorAll(".charDetail").forEach(data =>{
         data.addEventListener("click", displayDetail)
     })
}
//respond to click event
function displayDetail(evt){
    evt.preventDefault();
    document.querySelectorAll(".charDetail").forEach(data => data.childNodes[5].classList.add("hide"));
    this.childNodes[5].classList.toggle("hide");
}


const userDetails = (user) => {
    return (`
        <figure class = "charDetail" data-id = ${user.id}>
            <img src = ${user.charImg} alt =${user.name}/>
            <figcaption> ${user.name}</figcaption>

            <div class = "displayDetail">
                <div> Name: ${user.name} </div>
                <div> Gender: ${user.gender} </div>
                <div> Height: ${user.height} </div>
            </div>
        </figure>
    `)
}

const displayUserdetails = async(users) =>{
    let output = "";
    users.forEach(user =>{
        output+=userDetails(user);
    })
    characters.innerHTML = output;
    addClick();
}

const begin  = async () => {
    const starWarData = await fetchUrl(api_url);
    const newStarWarData = starWarData.results.map((user, index) => {
        user.id = index;
        user.charImg = charImgs[index];
        return user;
    });

    users = new Users(newStarWarData);
    displayUserdetails(newStarWarData);
    
}

begin();
