import './__select.scss'
let data = {
  options: [
    {id: 1, value: 'potato'},
    {id: 2, value: 'tomato'},
    {id: 3, value: 'avocato'},
    {id: 3, value: 'melon'},
    {id: 4, value: 'watermelon'},
    {id: 5, value: 'berries'}
  ]
}
const options = (options = []) => {
  const templateOptions = document.createElement("template")
  let optionsNode = ''
  let divStart = '<div class="select__list" role="list" id="options">'
  let divEnd =  '</div>'
  for (let i = 0; i < options.length; i++) {
    optionsNode += `
      <span class="select__option" role="option" data-value="${options[i].id}">
        ${options[i].value}  
      </span>
   `
  }
  optionsNode = optionsNode.trim()
  optionsNode = divStart + optionsNode + divEnd
  optionsNode = optionsNode.trim()
  templateOptions.innerHTML = optionsNode
  return templateOptions.content.firstChild
}
const select = () => {
  const templateSelect = document.createElement("template")
  let selectNode = `
    <div class="select" id="select-container">
      <div class="select__wrapper">
        <input type="text" role="select" id="input-select" class="select__input" />
        <div class="select__arrows">
          <span class="select__left" id="left"></span>
          <span class="select__right" id="right"></span>
        </div>
      </div>
    </div>
  `
  selectNode = selectNode.trim()
  templateSelect.innerHTML = selectNode
  return templateSelect.content.firstChild //template.content.firstChild
}
const assembler = () => {
  let optionList = options(data.options)
  let selectContainer = select()
  selectContainer.appendChild(optionList)
  return selectContainer
}
let animationArrow = (isActive) => {
  let arrowLeftEl = document.getElementById("left")
  let arrowRightEl = document.getElementById("right")
  if (isActive) {
    arrowLeftEl.classList.add("select__left--active")
    arrowRightEl.classList.add("select__right--active")
  } else {
    arrowLeftEl.classList.remove("select__left--active")
    arrowRightEl.classList.remove("select__right--active")
  }
}
let showList = () => {
  let optionsList = document.getElementById("options")
  console.log(optionsList)
  optionsList.classList.add("select__list--show")
  animationArrow(true)
}
let hiddenList = () => {
  let optionsList = document.getElementById("options")
  optionsList.classList.remove("select__list--show")
  animationArrow(false)
}
let action = () => {

  document.addEventListener("click", (e) => {
    if (e.target.closest("#select-container")) {
      showList()
    } else {
      hiddenList()
    }
  })
}
const UI = () => {
  const selectNode = document.getElementById("custom-select")
  //const inputNode = document.getElementById("input-select")
  let select = assembler()
  selectNode.appendChild(select)
  action()
}


UI()