import React, { useRef,useState } from 'react'
import './playArea.css'
import Header from '../../components/Header/Header'
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import * as functions from '../../data/Functions';
import shortcuts from '../../data/shortcuts';


const PlayArea = () => {
    const [currentShortcutIndex, setCurrentShortcutIndex] = useState(0);
    const codeEditorRef = useRef(null);
     const handleNextClick = () => {
      // Increment the current index and ensure it doesn't go beyond the array length
      const nextIndex = (currentShortcutIndex + 1) % shortcuts.length;
      setCurrentShortcutIndex(nextIndex);
    };

    const shortcut = shortcuts[currentShortcutIndex]
    const handleReset = () => {
      codeEditorRef.current.reset();
    }
  return (
    <div className='playarea-container'>
      <Header name={shortcut.name} instruction={shortcut.instruction} onNextClick={handleNextClick} keys={shortcut.keys}/>
      <div className='editor-container'>
        <div className='code-example-container'>
            <div className='code-example-header'>
              <span>example.css</span> <span onClick={handleReset}><svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.59875 15.2914C2.82275 20.1564 6.1215 24.5472 11.039 25.8649C15.9565 27.1809 21.0036 25.0267 23.6286 20.9265L19.9885 19.95C18.0548 22.2075 14.9853 23.2978 11.9438 22.484C8.90405 21.6685 6.78478 19.1887 6.23878 16.2662L2.59875 15.2914ZM4.40996 8.52952L8.04999 9.50417C9.98374 7.24667 13.0586 6.1582 16.1001 6.9737C19.1416 7.78745 21.2538 10.2672 21.798 13.188L25.4398 14.1645C25.2175 9.29947 21.9222 4.91044 17.0047 3.59269C12.089 2.27494 7.03671 4.42745 4.40996 8.5277V8.52952Z" fill="#DEE8FD"/>
<path d="M0 16.6617L4.375 12.2867L8.75 16.6617H0ZM28 12.2867L23.625 16.6617L19.25 12.2867H28Z" fill="#DEE8FD"/>
</svg></span>
            </div>
            <div className='code-example'>
              <CodeEditor handleSpecificFunction={functions[shortcut.function]} ref={codeEditorRef}/>     
            </div>
        </div>
      </div>
     </div>
  )
}
export default PlayArea
