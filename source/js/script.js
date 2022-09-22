const resultInput = document.querySelector('.generate-result')
const lenghtsInput = document.querySelector('.lenghts-input')
const uppercase = document.querySelector('#uppercase')
const lowercase = document.querySelector('#lowercase')
const numbers = document.querySelector('#number')
const lenghtResult = document.querySelector('#lenght-result')

resultInput.addEventListener("click", ()=> {
    alert("password copied")
    resultInput.select()
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
})
lenghtsInput.addEventListener("change", ()=> {
    lenghtResult.innerHTML = lenghtsInput.value
})
function generation() {
    let lenghtValue = lenghtsInput.value
        function numberGen(number, index) {
            let text = "";
            let possible = "abcdefghijklmnopqrstuvwxyz";

            if(uppercase.checked === true && lowercase.checked == true && numbers.checked == true) {
                possible = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }else if(uppercase.checked === true && lowercase.checked == true) {
                possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }else if(uppercase.checked === true && numbers.checked === true) {
                possible = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }else if(lowercase.checked === true && numbers.checked === true) {
                possible = "1234567890abcdefghijklmnopqrstuvwxyz"
            }else if(uppercase.checked === true) {
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }else if(numbers.checked === true) {
                possible = "123456789"
            }
            
            for( let i=0; i < index; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            
            return text
        }

    resultInput.value = numberGen("", lenghtValue);
}
eventTarget = document.querySelector('#" + CommentInpt.Id + "');

eventTarget.addEventListener('keydown', event => {
    event.preventDefault();
});
