function loadData(){
    fetch('https://raw.githubusercontent.com/nayeem19999/json/refs/heads/main/another.json')
    .then(res=>res.json())
    .then(data=>showData(data))
}


const showData=(values)=>{
    // console.log(values)
    const mainDiv = document.getElementById('main-div')
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
      <button onclick='add(${JSON.stringify(value)})' class="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        `
        mainDiv.appendChild(div)
    }
}


const add=(clicked)=>{
    const li = document.createElement('li')
    const ol = document.getElementById('manush')
    li.style.marginLeft = "40px"

    li.innerHTML = `
        <div class="font-bold font-xl">
            <h2>${clicked.name}</h2>
        </div>
    `
    console.log(li)
    ol.appendChild(li)
}

loadData();