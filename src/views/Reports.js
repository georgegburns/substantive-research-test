import React from 'react';
import './Reports.css'
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import DateChart from "../components/DateChart";
import LineChart from "../components/LineChart";


export default function Reports() {
    return (
    <>
        <h1>Sort and Filter Options would go here</h1>
        <div className="grid-container">
          <div className="grid-chart">
              <PieChart/>
          </div>        
          <div className="grid-chart">
              <BarChart/>
          </div>
      </div>  
      <div className="grid-container">
          <div className="grid-chart">
            <h1>A stacked bar chart by month would go here</h1>
          </div>        
          <div className="grid-chart">
            <LineChart/>
          </div>        
      </div> 
    </> 
    )
};