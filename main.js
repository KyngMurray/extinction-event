let crossOff = document.querySelectorAll('#list1 li'); 

for (let i = 0; i < crossOff.length; i++) {

    let item = crossOff[i]; 

    item.addEventListener('click', function() {
        if (item.style.textDecoration === 'line-through'){
            item.style.textDecoration = 'none';
        } else {
            item.style.textDecoration = 'line-through';
        };
    })
}

let fadeOut = document.querySelectorAll('#list2 li'); 

for (let i = 0; i < fadeOut.length; i++) {

    let list = fadeOut[i]; 
    
    list.addEventListener("click", function () {
        if (list.style.opacity === '0'){
            list.style.opacity = '1';
        } else if (list.style.opacity === '1'){ 
            list.style.opacity = '0';
        } else { 
            list.style.opacity = '0';
        }
    })    
};

let row = document.querySelector('#row'); 

row.addEventListener('click', function(event){

    event.target.style.width = '0px' 
})

let meteorButton = document.querySelector('#destroy-all');

meteorButton.addEventListener('click', function(){

    for (img of row.children){
        img.style.width = '0px'
    }
    for (let i = 0; i < fadeOut.length; i++){

        let item = fadeOut[i];

        item.style.opacity = '0'
    }
    for (let i = 0; i < crossOff.length; i++){

        let item = crossOff[i];

        item.style.textDecoration = 'line-through'
    }
})