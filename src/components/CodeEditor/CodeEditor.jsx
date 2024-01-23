import React, { useRef,useState } from 'react'

const CodeEditor = ({handleSpecificFunction}) => {
    const codeStringFirst = `import React, { useState, useEffect } from 'react';
    
    const Counter = () => {
      const [count, setCount] = useState(0);
    
      // useEffect to update document title
      useEffect(() => {
        document.title = 'Count: \${count}';
      }, [count]);`;
    const lines = codeStringFirst.split('\n');
    const inputRefs = lines.map(() => useRef(null));
    
  return (
    <table className='code-example'>
      <tbody>
        <tr>
          <td>
        {lines.map((line, index)=>(
               <input key={index} className='editor-input' type="text" onKeyDown={(e)=>handleSpecificFunction(e,index,inputRefs,lines)} ref={inputRefs[index]} defaultValue={line}/>
            ))}
            </td>
        </tr>
        
        
      </tbody>
            
            
            
    </table>
  )
}

export default CodeEditor