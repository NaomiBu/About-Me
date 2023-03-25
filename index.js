let favouriteButton = document.getElementById('favourite-button');
let submitButton = document.getElementById('submit-button')
let comments = document.getElementById('comments')

let isFavourited = false;

favouriteButton.addEventListener("click", function() {
    if (isFavourited === false) {
        favouriteButton.innerHTML = "Favourited!";
        isFavourited =!isFavourited;
    } else {
        favouriteButton.innerHTML = "Favourite";
        isFavourited =!isFavourited;
    }  
 }
)

submitButton.addEventListener("click", function () {
    let commentsValue = comments.value;
    alert(commentsValue);

}

)



