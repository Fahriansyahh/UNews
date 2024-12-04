import axios from 'axios';
import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function Heading({url}) {
    const [data,setData]=useState()
    const [error,setError]=useState()
    useEffect(() => {
      // Define the async function inside the useEffect
      const fetchData = async () => {
        try {
          const res = await axios.get(url);
          setData(res.data.articles);  // Set data on successful response
          setError("");  // Clear any previous errors
        } catch (err) {
          setError(err.message);  // Set the error message if the request fails
        }
      };
  
      // Call the async function
      fetchData();
    }, []); 

  return (
  <>
  {error ? (
      <>
      
        <h1>{error.message}</h1>
      </>
    ) : (
      <>
      {data?.filter(data=> data.content != "[Removed]").map((datas,index)=>{
          const formattedDate = moment(data.publishedAt).format('MMMM D, YYYY');
    
          return(
            <div key={index} className={`${index >= 1 ? "mt-5":""}`}>
             <Card style={{ width: '18rem' }} className='w-100'>
             <a href={datas.url} target="_blank"    style={{ display: datas.urlToImage ? "block" : "none" }}  rel="noopener noreferrer">
                <Card.Img variant="top" src={datas.urlToImage} />
            </a>
            <Card.Body>
            <a href={datas.url} target="_blank" rel="noopener noreferrer" style={{ color:"black" }}>
            <Card.Title>{datas.title ? datas.title:""}</Card.Title>
            </a>
                
                <Card.Text>
                    {datas.content ? datas.content:""}
                </Card.Text>
                <br></br>
                <Card.Text>
                    {datas.description ? datas.description:""}
                </Card.Text>
                <div>
                    <ul style={{ listStyle: "none", padding: 0,fontSize:"12px" }}>
                    <li style={{ display: "inline-block", marginRight: "10px" }}>{formattedDate? formattedDate:""} </li>
                    <li style={{ display: "inline-block", marginRight: "10px" }}>{datas.author ? datas.author:"" } </li>
                    <li style={{ display: "inline-block" }}>{datas.title ?datas.title:""}</li>
                    
                    </ul>
                </div>
            </Card.Body>
            </Card>
            </div>
          )
      })}
           
      </>
    )}
   
  </>
  )
}

export default Heading
