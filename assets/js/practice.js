let dropElem = document.getElementById("drop-elem");
let dragElems = document.querySelectorAll(".drag");



dragElems.forEach(dragElem => {
   
    
    dragElem.ondragstart = (e) => {
        let id = e.target.getAttribute("id");
        e.dataTransfer.setData("id", id);  
    }
    
    
    dropElem.ondragover = (e) => {
        e.preventDefault();
    }
    
    
    dropElem.ondrop = (e) => {
        let id = e.dataTransfer.getData("id")
        let elem = document.getElementById(id)
        e.target.append(elem)
    }


});