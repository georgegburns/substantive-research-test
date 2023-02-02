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

function LineChart() {
  const [data, setUserData] = useState([]);
  
  const getDataFetch = async () => {
    const response = await fetch(substantiveResearchAPI);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
      getDataFetch();
    },[])

  const dates = []
  for (const image of data) {
      if (dates.includes(image.date)){
          continue
      }
      else {
          dates.push(image.date)
      }
  }

  dates.sort(function(a,b) {
    a = a.split('/').reverse().join('');
    b = b.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
  });

  const sectorCount = []
  for (var i = 0; i < dates.length; i++){
      let num = 0
      for (const image of data) {
          if (image.date === dates[i]){
              num++
          }
      }
      sectorCount.push(num)
  }

  return (
    <div className="chart-container">
      <Bar
        data={{
            labels : dates,
            datasets : [{data: sectorCount}]}}
        height = "300px"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Orders By Date"
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
export default LineChart;