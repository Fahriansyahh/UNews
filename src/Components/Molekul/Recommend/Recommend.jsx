import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function Recommend({ nomorGanjil }) {
   
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px (you can adjust this breakpoint)
          
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=7b69dc6601ca4533ae6135ec7c4afdf4")
            .then(res => {
                setData(res.data.articles);
                setError("");  // Clear any previous errors
                console.log(res)
            })
            .catch(err => {
                setError(err.message);
            });
    }, []); // Empty dependency array, so this runs once when component mounts



    // Filter the data based on the odd/even index and nomorGanjil flag
    const filteredData = data?.filter((data, i) => {
        return data.content !== '[Removed]' && (nomorGanjil ? i % 2 !== 0 : i % 2 === 0);
    });
    



    return (
        <>
            {error ? (
                <>
                    <h1>{error}</h1>
                </>
            ) : (
                <div  style={{ height: isMobile ? 'auto' : '100vh', overflowY: isMobile ? 'visible' : 'auto' }} className='hide-scrollbar'>
                    {filteredData?.map((datas, index) => {
                        const formattedDate = moment(datas.publishedAt).format('MMMM D, YYYY');
                        return (
                            <div key={index} className='mt-3'>
                                <Card style={{ width: '18rem' }} className='w-100'>
                                {(nomorGanjil && !isMobile ? nomorGanjil:isMobile) && datas.urlToImage && (
                                        <a href={datas.url} target="_blank" style={{ display: "block" }} rel="noopener noreferrer">
                                            <Card.Img variant="top" src={datas.urlToImage} />
                                        </a>
                                    )}
                                    <Card.Body>
                                        <a href={datas.url} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                            <Card.Title>{datas.title || ""}</Card.Title>
                                        </a>
                                        <div>
                                            <ul style={{ listStyle: "none", padding: 0, fontSize: "12px" }}>
                                                <li style={{ display: "inline-block", marginRight: "10px" }}>
                                                    {formattedDate || ""}
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Recommend;
