var feedback = "Trump ipsum is gonna be YUUUGE - perhaps I’d be dating it. I know all the words - the best words. People think I'm the best - consciously or unconsciously. #cofefve #drumpf #potus";

var textareaJS = document.getElementById('textareaId');

textareaJS.addEventListener('input', function(e) {
    var keyboardInput = e.target.value;
    var createArray = keyboardInput.split("");
    for (var i = 0; i < keyboardInput.length; i++){
        createArray[i] = feedback[i];
    }
    textareaJS.value = createArray.join("");
});
