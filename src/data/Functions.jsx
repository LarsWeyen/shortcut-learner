export const selectText = (e,index, inputRefs) =>{
    if (e.altKey && e.shiftKey && e.keyCode == '39') {
        e.preventDefault();
  
        // Get the current cursor position
        e.preventDefault();

        const cursorPosition = inputRefs[index].current.selectionStart;
        const inputValue = inputRefs[index].current.value;
    
        // Find the start index of the current word
        let wordStart = cursorPosition - 1;
        while (wordStart >= 0 && /\S/.test(inputValue[wordStart])) {
          wordStart--;
        }
        wordStart++;
    
        // Find the end index of the current word
        let wordEnd = cursorPosition;
        while (wordEnd < inputValue.length && /\S/.test(inputValue[wordEnd])) {
          wordEnd++;
        }
    
        // Set the selection range
        inputRefs[index].current.setSelectionRange(wordStart, wordEnd);
    }
}

export const moveLine = (e, index, inputRefs,lines) => {
    var span = inputRefs[index].current,
    td = span.parentNode;
    var direction;
    if(e.altKey){
        if(e.key == "ArrowUp"){
            direction = -1
        }
        if(e.key == "ArrowDown" ){
            direction = 1
        }
    
        if (direction === -1 && span.previousElementSibling) {
            td.insertBefore(span, span.previousElementSibling);
            span.focus();
        } else if (direction === 1 && span.nextElementSibling) {
            td.insertBefore(span, span.nextElementSibling.nextElementSibling)
            span.focus();
        }
    }
    
};
