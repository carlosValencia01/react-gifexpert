import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const addHandler = ()=>{
    //     setCategories( [...categories,'The office'] );
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories} />
            <hr />
            
            <ol>
                {categories.map(category => {
                    return(
                        <GifGrid 
                            category={category}
                            key={category}
                            />
                    )
                } )}
            </ol>
        </>
    );
}

export default GifExpertApp;