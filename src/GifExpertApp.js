import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
     const [categories, setCategories] = useState(['one punch']);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Hunter hunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                       <GifGrid
                       key={category}
                       category={category} />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp;
