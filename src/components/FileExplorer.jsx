import React, { useState } from 'react'
import './FileExplorer.css';
import Input from './Input';

function FileExplorer({data, handleDeleteNode, handleInsertNode}) {
    const [expand, setExpand] = useState(false);
    const [value, setValue] = useState('')
    const [showInput, setShowInput] = useState(false);
    
    function handleExpand() {
        setExpand(!expand);
    }
    
    function handleDelete() {
        console.log("delete called", data.id)
        handleDeleteNode(data.id)
    }

    function handleAddNode() {
        setShowInput(true);
        setExpand(true);
    }
    
    function handlePressEnter(e) {
        if(e.target.value && e.keyCode === 13) {
            setShowInput(false);
            setValue('')
            setExpand(true);
            handleInsertNode(data.id, value, false);
        }
    }

    return (
        <div className='container'>
            <h3>
                {data.isFolder == true ? (expand ? "📂" : "📁") : "📄"}
                <span className='item' onClick={handleExpand}>{data.name}</span>
                <span className='delete-btn' onClick={handleDelete}>❌</span>
                {data.isFolder == true && <span className='add-btn' onClick={handleAddNode}>➕</span>}
            </h3>
            {showInput && <Input value={value} setValue={setValue} onPressEnter={handlePressEnter} handleBlur={(e) => setShowInput(false)}/>}
            {   
                expand && data?.items?.map((it) => {
                    return <FileExplorer key={it.id} data={it} handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode}>{it.name}</FileExplorer>
                })
            }
        </div>
    )
}

export default FileExplorer