var myArr = JSON.parse(array);

console.table(myArr);

for (let val of myArr) {

    document.getElementById("calendar").innerHTML += ` 
    
    <div class="card m-2" style="width: 18rem;">
                    <div class="m-1 d-flex justify-content-between">
                        <div>
                            <button type="button" id="btnclick"  height="10%" class="btn btn-2 btn-info mb-1 btnclick">Task</button>
                        </div>
                        <div>
                            <i class="far fa-bookmark me-2"></i>
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    <img src="${val.img}" class="card-img-top p-1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${val.name}</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                            unde?
                        </p>
                    </div>
                    <hr class="hr">
                    <div class="d-flex">
                    <p class="ps-3 pt-2"><i class="fas fa-exclamation-triangle"></i> Priority level:</p>
                    <div id="nber" style="background-color: #198754; color: white; width: 20px; height: 25px;text-align: center; border-radius: 3px 3px 3px;" class="col-1 m-2 nber color bg-sucsess"> ${val.importance}</div>
                    </div>
                    
                    <p class="ps-3 pt-1"><i class="fas fa-calendar-week"></i> Deadline: ${val.date}</p>
                    <hr class="hr">
                    <div class="d-flex justify-content-end card-body">
                        <div>
                            <button type="button" class="btn btn-danger btn-sm"><i class="far fa-trash-alt"></i>
                                Delete</button>
                            <button type="button" class="btn btn-success btn-sm"><i class="far fa-check-circle"></i>
                                Done</button>
                        </div>

                    </div>
                </div> `;
};

const btns = document.querySelectorAll(".btnclick");
const number = document.getElementsByClassName("nber");

console.log(btns); 


    
btns.forEach((btn, i) => btn.addEventListener('click', function(){
    myArr[i].importance += 1;
    number[i].innerHTML = myArr[i].importance; 

if (myArr[i].importance <= 2) {
    document.getElementsByClassName("color")[i].style.background =  "#198754";
} else if (myArr[i].importance >= 3 && myArr[i].importance <= 4) { document.getElementsByClassName("color")[i].style.background = "#ffc107";
} else {
    document.getElementsByClassName("color")[i].style.background = "#dc3545";
}

}
));

const priority = document.getElementById("sort");

for (let i = 0; i < priority.length; i++) {
    priority[i].addEventListener('click', function () {
        myArr[i].sort((a, b) => b.importance - a.importance);
    })

}










