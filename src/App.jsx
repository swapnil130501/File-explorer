import './App.css'
import FileExplorer from './components/FileExplorer'
import explorer from '../src/data/explorerData';
import { useState } from 'react';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
    const [data, setData] = useState(explorer);
    const [deleteNode, insertNode] = useTraverseTree();

    function handleDeleteNode(id) {
        const updatedTree = deleteNode(data, id);
        const newTree = {...updatedTree};
        setData(newTree);
    }

    function handleInsertNode(id, nodeName, isFolder) {
        const updatedTree = insertNode(data, id, nodeName, isFolder);
        const newTree = {...updatedTree};
        setData(newTree);
    }

    return (
        <>
            <FileExplorer data={data} handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode}/>
        </>
    )
}

export default App
