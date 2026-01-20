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

let contentHeader = document.getElementById('img_titel');
let contentSection = document.getElementById('dialog_img');
let contentDialog = document.getElementById('dialog_content');
let contentNumber = document.getElementById("img_numbering");
let contentHeadline = document.getElementById("content_headline");
let contentMain = document.getElementById("main_content");
let index = 0;

function openDialog(event) {
    if (event) event.stopPropagation();
    contentMain.classList.add("no_scroll");
    contentDialog.showModal();
    contentDialog.classList.add("dialog_opend");
    contentDialog.classList.remove("dialog_closed");
    getNoteTamplate(index);
}

function getNoteTamplate(index) {
    contentHeader.innerHTML = `<h2 id="dialog_titel" class="headline_two">${imgTitle[index]}</h2>`;
    contentSection.innerHTML = `<img class="dialog_img" src="${imgArray[index]}" alt="${imgAlt[index]}">`;
    contentNumber.innerHTML = (index + 1) + "/12";
}

function closeDialog() {
    contentDialog.classList.remove("dialog_opend");
    contentDialog.classList.add("dialog_closed");
    contentMain.classList.remove("no_scroll");

    setTimeout(function () {
        contentDialog.close();
        contentHeadline.focus();
        contentHeader.innerHTML = "";
        contentSection.innerHTML = "";
    }, 125);
}

function filterCurrentIndex(i) {
    index = i;
    openDialog();
}

function changeImage(ImageParameter) {
    if (ImageParameter == 1) {
        index++;

        if (index >= imgArray.length) {
            index = 0;
        }
    }

    if (ImageParameter == 0) {
        index--;

        if (index < 0) {
            index = 11;
        }
    }
    getNoteTamplate(index);
}

function closeDialogOnBodyclick(event) {
    event.stopPropagation()
}

function useKey(event) {
    if (event.key == 'ArrowLeft') {
        changeImage(0);
    }
    if (event.key == 'ArrowRight') {
        changeImage(1);
    }
} 