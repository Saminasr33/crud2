let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');



let count = document.getElementById('count');
let category = document.getElementById('category');



let submit = document.getElementById('submit');
let search = document.getElementById('search');

// get total
function gettotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = 'green'

    } else {
        total.innerHTML = ''
        total.style.backgroundColor = 'red'
    }
}

// create product
let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product);
} else {

    datapro = [];
};

submit.onclick = function () {
    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value
    }
    datapro.push(newpro);
    localStorage.setItem('product', JSON.stringify(datapro));
    clear();
    show();
}


// clear input
function clear() {
    title.value = '';
    price.value = '',
        taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = ''
    count.value = '';
    category.value = '';
}


// read
function show() {
    let tabel = '';

    for (let i = 0; i < datapro.length; i++) {
        tabel += `
    

    <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button>update</button</td>
        <td><button onclick="deletedata(${i})">delete</button</td>
    </tr>
    
    `
        document.getElementById('tbody').innerHTML = tabel;

    }

};


show();
// delete 
function deletedata(i) {
    datapro.splice(i, 1);
    datapro = JSON.parse(localStorage.product);
    show()
}

function deletedata(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    show();
}
