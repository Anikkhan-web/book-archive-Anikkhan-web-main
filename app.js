const showData = document.getElementById("show-data");
const error = document.getElementById("data-error");
const searchBook =()=>{
    const searchInput = document.getElementById("search-field");
    const showRESULT = searchInput.value;
    showRESULT.innerText=" ";
    const url = `https://openlibrary.org/search.json?q=${showRESULT}`;
    loadingSpinner();
    fetch(url).then(res=>res.json()).then((data)=>{
        displayBook(data)
    }).catch((err)=>{
        console.log(err.message)
        loadingSpinner();
    });
};

const displayBook =(books)=>{
    const displayFont= document.getElementById("customs");
    showData.innerHTML=`${books.docs.length}`;
    if(books.docs.length === 0){
        error.innerHTML=`We can't get any data!!`;
    };
    if(books.docs.length > 0){
        error.innerHTML=" "; 
        document.getElementById('spinners').style.display='none';
    };
   if(loadingSpinner() === false){
        error.innerHTML=" "; 
    };
    

    books.docs.forEach(book => {
        displayFont.innerHTML +=`
        <div class="col">
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author_name}</p>
                    <p class="card-text">${book.publisher[0]}</p>
                </div>
                <div class="card-footer">
                    <small class="text-mute">${book.first_publish_year}</small>
                </div>
            </div>
        </div>
        `;
        document.getElementById("spinners");
    });
};

const loadingSpinner = () => {
    const spinner = document.getElementById('spinners');
    spinner.classList.toggle('d-none');
};
