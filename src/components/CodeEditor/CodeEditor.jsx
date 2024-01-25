import React, { useRef,useState } from 'react'

const CodeEditor = ({handleSpecificFunction}) => {
    const dummyCode = `.playarea-container{
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 1rem;
      height: 100dvh; 
      max-height: 100dvh;
  }
  
  .editor-container{
      border-left: hsla(0, 0%, 100%, 0.25) 1px solid;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
  }
  
  .code-example-container{
      max-width: 90%;
      width: 90%;
      max-height: 90%;
      background-color: #171717;
      margin-left: 5rem;
  }`;
    const lines = dummyCode.split('\n');
    const inputRefs = lines.map(() => useRef(null));
    const test = () =>{
      inputRefs.forEach((ref,index)=>{
        ref.current.value = lines[index]
      })
    }
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