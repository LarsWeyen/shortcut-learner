import React, { useRef,useState } from 'react'
import './playArea.css'
import Header from '../../components/Header/Header'
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import * as functions from '../../data/Functions';
import shortcuts from '../../data/shortcuts';


const PlayArea = () => {
    const [currentShortcutIndex, setCurrentShortcutIndex] = useState(0);
    
     const handleNextClick = () => {
      // Increment the current index and ensure it doesn't go beyond the array length
      const nextIndex = (currentShortcutIndex + 1) % shortcuts.length;
      setCurrentShortcutIndex(nextIndex);
    };

    const shortcut = shortcuts[currentShortcutIndex]

  return (
    <div className='playarea-container'>
      <Header name={shortcut.name} instruction={shortcut.instruction} onNextClick={handleNextClick} keys={shortcut.keys}/>
      <div className='editor-container'>
        <div className='code-example-container'>
            <div className='code-example-header'>
              <span>example.css</span>
            </div>
            <div className='code-example'>
              <CodeEditor handleSpecificFunction={functions[shortcut.function]} />     
            </div>
        </div>
      </div>
     </div>
  )
}
export default PlayArea
