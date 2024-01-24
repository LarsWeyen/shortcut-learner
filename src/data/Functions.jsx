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

export const moveLine = (e, index, inputRefs) => {
    var line = inputRefs[index].current,
    td = line.parentNode;
    var direction;
    if(e.altKey){
        if(e.key == "ArrowUp"){
            direction = -1
        }
        if(e.key == "ArrowDown" ){
            direction = 1
        }
    
        if (direction === -1 && line.previousElementSibling) {
            td.insertBefore(line, line.previousElementSibling);
            line.focus();
        } else if (direction === 1 && line.nextElementSibling) {
            td.insertBefore(line, line.nextElementSibling.nextElementSibling)
            line.focus();
        }
    }
    
};

export const copyLine = (e, index, inputRefs) => {
    var line = inputRefs[index].current,
    td = line.parentNode;
 
    if(e.shiftKey){
        if(e.altKey){
            if(e.key == "ArrowUp" || e.key == "ArrowDown"){
                var newLine = document.createElement('input');
            newLine.type="text"
            newLine.value=line.value
            newLine.classList.add('editor-input')
            console.log(line.previousElementSibling)
            
                td.insertBefore(newLine, line.previousElementSibling.nextElementSibling);
                line.focus();
            
            }
           
            
        }
    }
    
}
