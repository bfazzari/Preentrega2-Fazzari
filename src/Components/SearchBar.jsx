//import App from "../App";
import { useState } from "react";

function SearchBar({ enSubmit }) {

    const [term,setTerm]= useState("");

    function handleForSubmit(event) {
        event.preventDefault();
        enSubmit(term);
    }
    function handleChange(event){
        setTerm(event.target.value);
    }

    return (

        <div>
            <form onSubmit={handleForSubmit}>

                <input value={term} type="text" onChange={handleChange}/>
                <button onClick={handleForSubmit}>Clic</button>

            </form>


        </div>
    )
}

export default SearchBar;