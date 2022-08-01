const button = document.querySelector('button')
const list = document.querySelector('#number-list')
const select = document.querySelector('select')


let max = 10
 
select.addEventListener('change', (ev) => {
	max = ev.target.value
})

const increment = (ev) => {
	if(ev.target.tagName === 'LI') {
		const listItem = ev.target
		listItem.innerText = listItem.innerText*1 + 1
		console.log(listItem)
	}
}

list.addEventListener('click', increment)

const addNumber = ()=> {
	const num = max - 10 + Math.ceil(Math.random()*10)
	const listItem = document.createElement('li')
	listItem.innerText = num
	list.appendChild(listItem)
}

button.addEventListener('click', addNumber)
