function loadData(){
    fetch('https://raw.githubusercontent.com/nayeem19999/json/refs/heads/main/another.json')
    .then(res=>res.json())
    .then(data=>showData(data))
}


const showData=(values)=>{
    console.log(values)
    const mainDiv = document.getElementById('main-div')
    let isActice = true
    for(const value of values){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 h-[400px] shadow-xl">
  <figure>
    <img class="h-[200px] w-full"
      src=${value.img}
      alt="images" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${value.name}</h2>
    <p>${value.details}</p>
    <div class="card-actions justify-end">
      <button id=${value.name} onclick='add(${JSON.stringify(value)})' class="btn btn-primary">Select</button>
     
    </div>
  </div>
</div>
        `
        mainDiv.appendChild(div)
        
        // isActice?document.getElementById('selectButton').disabled = true:document.getElementById('selectButton').disabled = false;
    }
}



const add=(clicked)=>{
    const li = document.createElement('li')
    const ol = document.getElementById('manush')
    li.style.marginLeft = "40px"
    const values = clicked.name;
    const newValues = values.split(' ')[0];

    console.log()
    clicked?document.getElementById(newValues).disabled = true:document.getElementById(newValues).disabled = false
    li.innerHTML = `
        <div class="font-bold font-xl flex justify-between mb-10">
            <h2>${clicked.name}</h2>
            <br/>
            <img class="h-[50px] w-[100px]" src=${clicked.img}/>
        </div>
    `
    const manush = document.getElementById('manush').childElementCount
    if(manush>4){
        alert('you can select max 5')
    }
    else{
        ol.appendChild(li)
    }
    console.log(li)
    
}


document.getElementById('submit').addEventListener('click',function (){

        const inputValue = document.getElementById('inputValue')
        const intInputValue = parseInt(inputValue.value)
        const manush = document.getElementById('manush').childElementCount
        console.log(manush)
        const totalCount = intInputValue * manush
        const cost = document.getElementById('cost')
        cost.innerText = totalCount


})

loadData();