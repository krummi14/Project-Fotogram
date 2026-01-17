// array of img files, array of img titles and array of alternative img name
let imgArray = ['./img/beach-1790701_1280.jpg',
    './img/boy-6559419_1280.jpg',
    './img/hoi-an-7501885_1280.jpg',
    './img/landscape-5104510_1280.jpg',
    './img/market-2494520_1280.jpg',
    './img/mountains-4484190_1280.jpg',
    './img/pham-ngu-lao-3989110_1280.jpg',
    './img/river-8105970_1280.jpg',
    './img/pine-7171768_1280.jpg',
    './img/sea-4168234_1280.jpg',
    './img/street-vendor-4176310_1280.jpg',
    './img/tea-9800900_1280.jpg'];

let imgTitle = ["beach-1790701_1280.jpg",
    "boy-6559419_1280.jpg",
    'hoi-an-7501885_1280.jpg',
    'landscape-5104510_1280.jpg',
    'market-2494520_1280.jpg',
    'mountains-4484190_1280.jpg',
    'pham-ngu-lao-3989110_1280.jpg',
    'river-8105970_1280.jpg',
    'pine-7171768_1280.jpg',
    'sea-4168234_1280.jpg',
    'street-vendor-4176310_1280.jpg',
    'tea-9800900_1280.jpg'];

let imgAlt = ['beach of vietnam',
    'vietnamese boy',
    'vietnam hoi an',
    'landscape of vietnam',
    'vietnam market',
    'landscape with mountains in vietnam',
    'vietnam pham-ngu lao',
    'vietnam river',
    'vietnam forest',
    'sea of vietnam',
    'streets of vietnam',
    'vietnam tea plantation'];

// variable of content in dialog header
// variable of img content in dialog section
// variable of all dialog content
// variable index for filter current index
let contentHeader = document.getElementById('img_titel');
let contentSection = document.getElementById('dialog_img');
let contentDialog = document.getElementById('dialog_content');
let index = 0;

// openDialog function:
// open dialog by click on img (element one) at position null
// add class dialog_opend
// add <h2> and <img> with content
function openDialog() {
    contentDialog.showModal();
    contentDialog.classList.add("dialog_opend");
    contentDialog.classList.remove("dialog_closed");
    getNoteTamplate(index);
}

// create content for HTML in <dialog> of selected Image
function getNoteTamplate(currentImgIndex) {
    contentHeader.innerHTML = `<h2 class="headline_two">${imgTitle[currentImgIndex]}</h2>`;
    contentSection.innerHTML = `<img class="dialog_img" src="${imgArray[currentImgIndex]}" alt="${imgAlt[currentImgIndex]}">`;
}

// closeDialog
// close dialog by click on "x"
// remove class dialog opend
// add class dialog closed
// empty content of <dialog>
function closeDialog() {
    // contentDialog.close();
    contentDialog.classList.remove("dialog_opend");
    contentDialog.classList.add("dialog_closed");

    // close dialog after finish of animation (750ms)
    setTimeout(function () {
        contentDialog.close();
        contentHeader.innerHTML = "";
        contentSection.innerHTML = "";
    }, 750);
}

// identify currently index of function openDialog()
function filterCurrentIndex(i) {
    index = i;
    openDialog();
}

// switch to next img and create these with associated img titel
function createNextImg() {
    index++;

    if (index >= imgArray.length) {
        index = 0;
    }
    getNoteTamplate(index);
}

// switch to prevvious img and create these with associated img titel
function createPreviousImg() {
    index--;

    if (index < 0) {
        index = 11;
    }
    getNoteTamplate(index);
}


// next steps:
// overwrite number if switch to next or previous image 

