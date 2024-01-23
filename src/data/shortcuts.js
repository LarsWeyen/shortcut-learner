var shortcuts =[
    {
        name: "shortcut 1",
        instruction: "Press <code id='End'>End</code> or <code id='Home'>Home</code> to move the cursor to the beginning or end of the line.",
        function: "selectText",
        keys:["Home","End"]
    },
    {
        name: "shortcut 2",
        instruction: "Put your cursor on a word and press <code id='Alt'>ALT</code> <code id='Shift'>Shift</code> <code id='ArrowRight'>--></code> to select that word",
        function: "selectText",
        keys:["Alt","Shift","ArrowRight"]
    },
    {
        name: "shortcut 3",
        instruction: "While your cursor is in a line press <code id='Alt'>ALT</code> and <code id='ArrowUp'>ArrowUp</code> to move that line upwards or downwards",
        function: "moveLine",
        keys:["Alt","ArrowUp"]
    }
]

export default shortcuts
