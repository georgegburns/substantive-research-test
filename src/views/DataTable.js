import React, { useEffect, useState }  from 'react';
import './DataTable.css'

const substantiveResearchAPI = "http://substantiveresearch.pythonanywhere.com/";

export default function DataTable() {
    const [data, setUserData] = useState([]);
  
    const getDataFetch = async () => {
      const response = await fetch(substantiveResearchAPI);
      const data = await response.json();
      setUserData(data);
    };

    useEffect(() => {
        getDataFetch();
      },[])
  
    return (
        <>
        <h1>Sort and Filter Options would go here</h1>
        <table>  
        <thead>
        <tr>
            <th>Sector ID</th>
            <th>Name</th>
            <th>Date</th>
        </tr>
        </thead>    
        <tbody>
       {data.map((data, i) => {
            return (
                <tr key={i}>
                    <td>{data.sector_id}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                </tr>
            )
        })}
        </tbody>
    </table>
    </>
    )
    };