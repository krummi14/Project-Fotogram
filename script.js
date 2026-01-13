// array of vietnam pictures
let imgTitle = ["beach-1790701_1280.jpg",
    "boy-6559419_1280.jpg"
];

// initalisation of function init() with loading body tag -> add elements into div container with id = photo_content
function init() {
    let contentRef = document.getElementById('photo_content');      // variable contentRef =id of div container
    contentRef.innerHTML = "";                                      // before for loop empty content of div container

    for (let index = 0; index < imgTitle.length; index++) {       // for loop -> writes every element of array into div container
        contentRef.innerHTML += imgTitle[index];
    }
}

