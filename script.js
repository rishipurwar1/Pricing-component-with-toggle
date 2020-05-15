const toggleBtn = document.querySelector('span');
const one = document.getElementById('one');
// Add event listeners
toggleBtn.addEventListener('click', () => {
    if(one.innerText === "$19.99" && two.innerText === "$24.99" && three.innerText === "$39.99") {
        one.innerText = "$199.99";
        two.innerText = "$249.99";
        three.innerText = "$399.99";
    } else {
        one.innerText = "$19.99";
        two.innerText = "$24.99";
        three.innerText = "$39.99";
    }
});