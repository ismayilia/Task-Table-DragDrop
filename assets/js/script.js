"use strict";

let fileInput = document.querySelector(".file-input");

let tableBody = document.querySelector(".table-area .table tbody")

let alertsError = document.querySelector(".alerts")

let tableRemove =document.querySelector(".table-area .table")

let buttonClear = document.querySelector(".clear")

let uploadIcon = document.querySelector(".icon i")

let dropArea = document.querySelector(".icon")



dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
})

dropArea.addEventListener("drop",function(e){
    console.log(e);
    e.preventDefault();
    fileInput.files=e.dataTransfer.files
    uploadItem(); 
})



uploadIcon.addEventListener("click", function(){
    fileInput.click();
    
})

fileInput.addEventListener("change", uploadItem);



function uploadItem(){
    for (const file of fileInput.files) {
        let fileReader = new FileReader();
        
        fileReader.onloadend = (e) => {
            let base64Img = e.currentTarget.result;

            tableBody.innerHTML += `<tr>
            <td><img src="${base64Img}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} kb</td>
            </tr>`
        }

        fileReader.readAsDataURL(file);

        alertsError.classList.add("d-none");
        tableRemove.classList.remove("d-none")
        buttonClear.classList.remove("d-none")
        
    }
    buttonClear.addEventListener("click", function(){
        tableRemove.classList.add("d-none")
        this.classList.add("d-none")
        fileInput.value = ""
        alertsError.classList.remove("d-none")
        tableBody.innerHTML=""
    })
}



