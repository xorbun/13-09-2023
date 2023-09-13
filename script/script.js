const newNote=document.getElementById("newReminder");

newNote.addEventListener("submit", function(e)
{
    e.preventDefault();
   const reminderField=document.getElementById("reminder");
   
   const newReminder2=
   {
    title: reminderField.value,
   };
   

   const newCard=document.createElement("div");
   newCard.classList.add("RememberTo");
   newCard.innerHTML=`<p>${newReminder2.title}</p> 
   <button onclick="deletememo(event)">CANCELLA MEMO</button> `

   const section=document.getElementById("savedmemo");
   section.appendChild(newCard);
   reminderField.value="";
   
})
const deletememo= function(a)
   {
        const clickedbut=a.target;
        console.log(clickedbut.parentElement);
        console.log(selector);
        const finish=clickedbut.parentElement.remove(); 
        
   }
