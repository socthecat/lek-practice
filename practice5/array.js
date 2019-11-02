
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function randomList() {
    let ranList = [];
    for (i = 0; i < (Math.floor(Math.random() * 6) + 1); i++) {
        ranList.push(randomDate(new Date(2010, 2, 17), new Date()));
    }
    shuffle(ranList);
    return ranList;
}

function tryparse() {
    let randomList0 = null;
    if (localStorage.getItem("list1") === null) {
        randomList0 = randomList();
        document.getElementById("list").innerHTML = randomList0;
    } else {
        randomList2 = [];
        randomList0 = JSON.parse(localStorage.getItem("list1"));
        for (i = 0; i < randomList0.length; i++) {
            randomList2[i] = new Date(randomList0[i]);
        }
        randomList0 = randomList2;
        document.getElementById("list").innerHTML = randomList0;
    }
    return randomList0;
}

let randomList1 = tryparse();

function clickShuffle() {
    shuffle(randomList1);
    return document.getElementById("list").innerHTML = randomList1;
}

function clickSort() {
    randomList1.sort((a, b) => a.getTime() - b.getTime());
    return document.getElementById("list").innerHTML = randomList1;
}

function clickStore() {
    localStorage.setItem("list1", JSON.stringify(randomList1));
}
