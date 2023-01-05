let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function () {
  // console.log(tabs[0].url)

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0]
    let activeTabId = activeTab.id // or do whatever you need

 });

  myLeads.push(tabs[0].url)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

})

function render(leads) {
  let listItems = ""

  for (let i = 0; i < leads.length; i++) {

  listItems +=
  `
    <li>
        <a target='_blank' href='${leads[i]}'> 
            ${leads[i]} 
        </a>
    </li>
  `
  }

  ulEl.innerHTML = listItems
 
}


deleteBtn.addEventListener("dblclick", function () {
   localStorage.clear()
   myLeads = []
   render(myLeads)
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})



// Note to self:

// 1.

//  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

//  alternative way to do this: 

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li) 

// 2.   

// listItems =
// `
//   <li>
//       <a target='_blank' href='${myLeads[i]}'> 
//           ${myLeads[i]} 
//       </a>
//   </li>
// `

//  // another way: 
// //  listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

// 3. 

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
