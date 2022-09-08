
// input fild function 
 
const inputFildValue =(idOfinput)=>{
    const input =document.getElementById(idOfinput)
    const inputValue = input.value;
    input.value =``;
    return(inputValue);
}

// btn click add 
const addBtn =()=>{
    const names  =inputFildValue('nameFild')
    const pices =inputFildValue('piceFild');

    if(!names || !pices){
        return;
    }
    // localStorage.setItem(names, pices)
    ui(names, pices);

    lodeLoocalStorage(names, pices);

}



// mack Array lode localStorage 
const getArray =()=>{
    let added = localStorage.getItem('prodacts');
    console.log(added)
    let prodacts ={};
    if(added){
        prodacts =JSON.parse(added);
    }
    console.log(prodacts)
    return prodacts;
}

const lodeLoocalStorage=(names, pices)=>{
    const prodacts = getArray();
    prodacts[names] =pices;
    // console.log(prodacts)
    const storage = JSON.stringify(prodacts);
    localStorage.setItem('prodacts', storage)
    
}



// ui add function
const ui =(names, pices)=>{
    const ul =document.getElementById('ul');
    const li =document.createElement('li');
    li.innerHTML=`
        <p>${names} ${pices} <button onclick="rem('${names}',this)" class="btn btn-info ms-5">remove</button></p>
    `
    ul.appendChild(li);
}
const displystorage = ()=>{
    const prodacts =getArray();

    for(const names in prodacts){
        const   pices =prodacts[names]
        console.log(names, pices)
        ui(names, pices)
    }
    
}
displystorage();


// // // clear btn add 
// const clear =()=>{
//     localStorage.removeItem('prodacts');
//     console.log('click')

// }

document.getElementById('btnc').addEventListener('click', function(){
    localStorage.removeItem('prodacts');
    console.log('click')
    const ul =document.getElementById('ul');
    ul.innerHTML=``;
})


// remove 
const rem=(names, element)=>{
    // localStorage.removeItem('name');
    element.parentNode.parentNode.style.display='none'
    const prodacts =getArray();
    delete prodacts[names]
    const storage = JSON.stringify(prodacts);
    localStorage.setItem('prodacts', storage)

}