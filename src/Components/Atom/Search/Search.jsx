import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../Config/Redux/Reducer/searchSlice';


function Search() {
    const [clicks, setClicks] = useState(true);
    const navigate = useNavigate();  // Mengambil fungsi navigate dari React Router
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchSlice.searchTerm);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            
            if(event.target.value){
                dispatch(setSearchTerm(event.target.value)); // Menyimpan nilai searchTerm di Redux
                navigate("/Searching")
                localStorage.setItem("search",event.target.value)

         }
     
        }
      };
    return (
        <Form className={`d-flex  w-75 `}>
             <Button variant="outline-success" onClick={() => {
                setClicks(!clicks)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </Button>
            <Form.Control
                type="search"
                placeholder="Search"
                className={`ms-2 ${clicks ? "d-none":"d-block"} ` }
                aria-label="Search"
               
                onKeyDown={handleKeyDown}  // Listen for key press
      
            />
           
        </Form>
    );
}

export default Search;
