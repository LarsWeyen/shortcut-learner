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
            
                td.insertBefore(newLine, line.previousElementSibling.nextElementSibling);
                line.focus();
            }
        }
    }
}

export const deleteLine = (e,index,inputRefs) => {
    var line = inputRefs[index].current
    
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75){   
        e.preventDefault();
        e.stopPropagation();
       
        line.remove()    
    }
}

export const indentOrOutdentLine = (e,index,inputRefs) => {
    var line = inputRefs[index].current
    if(e.ctrlKey && e.keyCode === 221){
        line.value = "     "  + line.value;
    }

    if(e.ctrlKey && e.keyCode === 219){
        if (line.value.startsWith("     ")) {
            line.value = line.value.substring(5);
        }
    }
}

export const endOrBeginningLine = (e,index,inputRefs) => {
    var firstLine = inputRefs[0].current
    var lastLine = inputRefs[inputRefs.length - 1].current
    
    if(e.ctrlKey && e.keyCode === 36){
        firstLine.focus();
    }
    if(e.ctrlKey && e.keyCode === 35){
        lastLine.focus();
    }
}

export const toggleLineComment = (e,index,inputRefs) => {
    var line = inputRefs[index].current
    if(e.ctrlKey && e.keyCode === 191){
        if (line.value.startsWith(" //")) {
            line.value = line.value.substring(3);
        }
        else{
            line.value = " //"  + line.value;
        }
    }
    
}