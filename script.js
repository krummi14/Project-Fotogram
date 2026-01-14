let imgArray = ['./img/beach-1790701_1280.jpg'];

// array of vietnam pictures
let imgTitle = ["beach-1790701_1280.jpg",
    "boy-6559419_1280.jpg"
];

// array about alternative name of img
let imgAlt = ['beach of vietnam'];

// variable of content in dialog header
let contentHeader = document.getElementById('img_titel');

// variable of img content in dialog section
let contentSection = document.getElementById('dialog_img');

// variable imgDialog = id dialog_content
let imgDialog = document.getElementById("dialog_content");

// open-function to open dialog by click on img (element one) at position null
function openDialog() {
    imgDialog.showModal();
    contentHeader.innerHTML = `<h2>${imgTitle[0]}</h2>`;
    contentSection.innerHTML = `<img src="${imgArray[0]}" alt="${imgAlt[0]}">`;
}

// close-function to close dialog by click on "X"
function closeDialog() {
    imgDialog.close();
    contentHeader.innerHTML = "";
    contentSection.innerHTML = "";
}

// initalisation of function init() with loading body tag -> add elements into div container with id = photo_content
function init() {
    let contentRef = document.getElementById('img_titel');      // variable contentRef =id of div container
    contentRef.innerHTML = "";                                      // before for loop empty content of div container

    for (let index = 0; index < imgTitle.length; index++) {       // for loop -> writes every element of array into div container
        contentRef.innerHTML += imgTitle[index];
    }
}


// next steps:
// include filter button (left or right)
// create style for dialog window
// fill arrays with all img content
// intigrate for loop to open random img and all element are correct!
// ...

