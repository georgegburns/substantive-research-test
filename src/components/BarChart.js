import React, { useEffect, useState }  from 'react';
import { Bar } from "react-chartjs-2";
import {Chart, BarElement, Title, plugins, CategoryScale, LinearScale, BarController} from 'chart.js';
Chart.register(BarElement);
Chart.register(Title);
Chart.register(plugins);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarController);

const substantiveResearchAPI = "http://substantiveresearch.pythonanywhere.com/";

function BarChart() {

  const [data, setUserData] = useState([]);
  
  const getDataFetch = async () => {
    const response = await fetch(substantiveResearchAPI);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
      getDataFetch();
    },[])

  const labels = []
  for (const image of data) {
      if (labels.includes(image.name)){
          continue
      }
      else {
          labels.push(image.name)
      }
  }

  const sectorCount = []
  for (var i = 0; i < labels.length; i++){
      let num = 0
      for (const image of data) {
          if (image.name === labels[i]){
              num++
          }
      }
      sectorCount.push(num)
  }

  return (
    <div className="chart-container">
      <Bar
        data={{
            labels : labels,
            datasets : [{data: sectorCount}]}}
        height = "300px"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Orders By Sector"
            },
            legend: {
              display: false
            },
            maintainAspectRatio: false
          }
        }}
      />
    </div>
  );
}
export default BarChart;