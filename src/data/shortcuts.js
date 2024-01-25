var shortcuts =[
    {
        name: "Shortcut 1",
        instruction: "Press <code id='End'>End</code> or <code id='Home'>Home</code> to move the cursor to the beginning or end of the line.",
        function: "selectText",
        keys:["Home","End"]
    },
    {
        name: "Shortcut 2",
        instruction: "Put your cursor on a word and press <code id='Alt'>Alt</code> <code id='Shift'>Shift</code> <code id='ArrowRight'>--></code> to select that word",
        function: "selectText",
        keys:["Alt","Shift","ArrowRight"]
    },
    {
        name: "Shortcut 3",
        instruction: "While your cursor is in a line press <code id='Alt'>Alt</code> and <code id='ArrowUp'>Arrow Up</code> or <code id='ArrowDown'>Arrow Down</code> to move that line upwards or downwards",
        function: "moveLine",
        keys:["Alt","ArrowUp","ArrowDown"]
    },
    {
        name: "Shortcut 4",
        instruction: "While your cursor is in a line press <code id='Control'>Ctrl</code> <code id='Shift'>Shift</code> and <code id='K'>K</code> to delete that line",
        function: "deleteLine",
        keys:["Control","Shift","K"]
    },
    {
        name: "Shortcut 5",
        instruction: "While your cursor is in a line press <code id='Control'>Ctrl</code> <code id='['>[</code> or <code id=']'>]</code> to indent or outdent that line",
        function: "indentOrOutdentLine",
        keys:["Control","]","["]
    },
    {
        name: "Shortcut 6",
        instruction: "While your cursor is in a line press <code id='Control'>Ctrl</code> <code id='End'>End</code> or <code id='Home'>Home</code> to move to the beginning or end of the file",
        function: "endOrBeginningLine",
        keys:["Control","Home","End"]
    },
    {
        name: "Shortcut 7",
        instruction: "While your cursor is in a line press <code id='Control'>Ctrl</code> <code id='/'>/</code> to toggle line comment",
        function: "toggleLineComment",
        keys:["Control","/"]
    },
    {
        name: "Shortcut 8",
        instruction: "While your cursor is in a line press <code id='Shift'>Shift</code> <code id='Alt'>Alt</code> and <code id='ArrowUp'>Arrow Up</code> or <code id='ArrowDown'>Arrow Down</code> to copy that line",
        function: "copyLine",
        keys:["Shift","Alt","ArrowUp","ArrowDown"]
    }
]

export default shortcuts