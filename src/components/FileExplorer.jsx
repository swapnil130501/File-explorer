import React, { useState } from 'react'
import './FileExplorer.css';

function FileExplorer({data, handleDeleteNode, handleInsertNode}) {
    const [expand, setExpand] = useState(false);
    
    function handleExpand() {
        setExpand(!expand);
    }
    
    function handleDelete() {
        console.log("delete called", data.id)
        handleDeleteNode(data.id)
    }

    function handleAddNode() {
        setExpand(true);
        handleInsertNode(data.id, "test.jsx", false)
    }

    return (
        <div className='container'>
            <h3>
                {data.isFolder == true ? (expand ? "📂" : "📁") : "📄"}
                <span className='item' onClick={handleExpand}>{data.name}</span>
                <span className='delete-btn' onClick={handleDelete}>❌</span>
                {data.isFolder == true && <span className='add-btn' onClick={handleAddNode}>➕</span>}
            </h3>
            {
                expand && data?.items?.map((it) => {
                    return <FileExplorer key={it.id} data={it} handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode}>{it.name}</FileExplorer>
                })
            }
        </div>
    )
}

export default FileExplorer