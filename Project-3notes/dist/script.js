const content=document.getElementById('content');
const button=document.getElementById('button');

button.onclick=function(){
    createNotes();
}

function updateStorage(){
    localStorage.setItem("notes",content.innerHTML);
}


function createNotes(){
    const box =document.createElement('div');
    box.style.display="flex"
   box.style.flexDirection="column"
   const notes=document.createElement('textarea');
   notes.type="text"
   notes.style.display="flex"
   notes.style.height="3rem"
   notes.style.textAlign="left"
   notes.style.verticalAlign="top"
   notes.style.fontSize="9px"
   notes.style.fontWeight="bold"
   notes.style.width="12rem"
   notes.style.marginTop="10px"
   notes.style.borderRadius="3px"
   notes.style.outline="none"
   box.append(notes);
   notes.focus();
   const delbtn=document.createElement('img');
   delbtn.src="https://img.icons8.com/?size=160&id=LxaBA0QjkFy0&format=png";
   box.append(delbtn);
   delbtn.style.marginTop="auto";
   delbtn.style.height="18px"
   delbtn.style.position="relative"
   delbtn.style.top="-22px"
    delbtn.style.marginLeft="auto";
    content.append(box);
    delbtn.onclick=function(){
        content.removeChild(box);
    }
}


