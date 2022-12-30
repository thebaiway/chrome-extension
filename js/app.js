let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
})


function renderLeads() {
  let listItems = ""

  for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>"
  
  ulEl.innerHTML = listItems
 }
}




// Note to self:

//  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

//  alternative way to do this: 

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li) 

