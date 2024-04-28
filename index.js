fetch(
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    DisplayTable(data.data);
  });
let tbody = document.querySelector("tbody");
function DisplayTable(data) {
  data.map((ele) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.innerHTML = ele.id;
    td2.innerHTML = ele.name;
    td3.innerHTML = ele.gender;
    td4.innerHTML = ele.department;
    td5.innerHTML = ele.salary;
    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  });
}
// Filter by department
let department = document.querySelector("#department");
department.addEventListener("click", function () {
  if (department.value=='hr') {  //check the value of department
    fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=hr"
    )
      .then((res) => res.json())
      .then((data) => {
        // arr=[]
        // data.data.map((h)=>{
        //     if(h.department=='hr'){ //match the value of department 
        //         arr.push(h)
        //     }
        // })
        tbody.innerHTML=null
        DisplayTable(data.data)
      });
  }else if(department.value=='finance'){
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=finance"
      )
        .then((res) => res.json())
        .then((data) => {
        //   arr=[]
        //   data.data.map((f)=>{
        //       if(f.department=='finance'){
        //           arr.push(f)
        //       }
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
  }else if(department.value=='marketing'){
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=marketing"
      )
        .then((res) => res.json())
        .then((data) => {
        //   arr=[]
        //   data.data.map((m)=>{
        //       if(m.department=='marketing'){
        //           arr.push(m)
        //       }
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
  }else if(department.value=='engineering'){
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=engineering"
      )
        .then((res) => res.json())
        .then((data) => {
        //   arr=[]
        //   data.data.map((e)=>{
        //       if(e.department=='engineering'){
        //           arr.push(e)
        //       }
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
  }else{
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?filterBy=department&filterValue=operations"
      )
        .then((res) => res.json())
        .then((data) => {
        //   arr=[]
        //   data.data.map((o)=>{
        //       if(o.department=='operations'){
        //           arr.push(o)
        //       }
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
  }
});
let Gender=document.querySelector("#Gender")
Gender.addEventListener('click',function(){
    if(Gender.value=='Female'){
        fetch(
            "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
          )
            .then((res) => res.json())
            .then((data) => {
              arr=[]
              data.data.map((F)=>{
                  if(F.gender=='female'){
                      arr.push(F)
                  }
              })
              tbody.innerHTML=null
              DisplayTable(arr)
            });
    }else{
        fetch(
            "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
          )
            .then((res) => res.json())
            .then((data) => {
              arr=[]
              data.data.map((M)=>{
                  if(M.gender=='male'){
                      arr.push(M)
                  }
              })
              tbody.innerHTML=null
              DisplayTable(arr)
            });
    }
})
//filter by Salary 
let price=document.querySelector("#Price")
price.addEventListener("click",function(){
    if(price.value=='HightoLow'){
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?sort=salary&order=desc"
      )
        .then((res) => res.json())
        .then((data) => {
        //   data.data.sort((a,b)=>{
        //       return b.salary-a.salary
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
    }
})
//small to higest salary

 price.addEventListener('click',function(){
    if(price.value=="LowtoHigh"){

    
    fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?sort=salary&order=asc"
      )
        .then((res) => res.json())
        .then((data) => {
        //   data.data.sort((a,b)=>{
        //     console.log(data.data)
        //       return a.salary-b.salary
        //   })
          tbody.innerHTML=null
          DisplayTable(data.data)
        });
    }
})
