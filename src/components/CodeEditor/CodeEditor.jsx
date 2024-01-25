import React, { useImperativeHandle, useRef,useState,forwardRef } from 'react'

const CodeEditor = ({handleSpecificFunction},ref) => {
    const dummyCode = ` header {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
  }
  
  article {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f0f0f0;
  }
  
  footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
      margin: 5px;
  }`;
    const lines = dummyCode.split('\n');
    const inputRefs = lines.map(() => useRef(null));
    const reset = () =>{
      document.querySelectorAll('.new-line').forEach((element) => {
        element.remove();
      });
      inputRefs.forEach((ref,index)=>{
        ref.current.value = lines[index]
      })
    }
    useImperativeHandle(ref, ()=> ({
      reset: () => reset(),
    }))
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

export default forwardRef(CodeEditor)