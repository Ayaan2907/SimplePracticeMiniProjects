const addButton = document.querySelector('#addButton')
var inputValue = document.querySelectoryselector('#input')
const container = document.querySelector('#container')

class item{
    constructor(itemName){
    this.createDiv(itemName)

}
createDiv(itemName){
    let input = document.querySelector('input')
    input.value = itemName
}
