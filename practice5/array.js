
const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]]
  }
  return this
}

const randomList = () => {
  const ranList = []
  for (let i = 0; i < (Math.floor(Math.random() * 6) + 1); i++) {
    ranList.push(randomDate(new Date(2010, 2, 17), new Date()))
  }
  ranList.shuffle()
  return ranList
}

const tryParse = () => {
  let temp = null
  if (localStorage.getItem('list1') === null) {
    temp = randomList()
    document.getElementById('list').innerHTML = temp
  } else {
    let temp2 = []
    temp = JSON.parse(localStorage.getItem('list1'))
    for (let i = 0; i < temp.length; i++) {
      temp2[i] = new Date(temp[i])
    }
    temp = temp2
    document.getElementById('list').innerHTML = temp
  }
  return temp
}

let randomList1 = tryParse()

const clickShuffle = () => document.getElementById('list').innerHTML = randomList1.shuffle()

const clickSort = () => document.getElementById('list').innerHTML = randomList1.sort((a, b) => a.getTime() - b.getTime())

const clickStore = () => localStorage.setItem('list1', JSON.stringify(randomList1))

const clickClear = () => {
  localStorage.clear()
  randomList1 = undefined
  document.getElementById('list').innerHTML = 'You should now refresh the page.'
}
