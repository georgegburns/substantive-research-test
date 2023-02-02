import React, { useEffect, useState }  from 'react';
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement, Title, plugins} from 'chart.js';
Chart.register(ArcElement);
Chart.register(Title);
Chart.register(plugins);

const substantiveResearchAPI = "http://substantiveresearch.pythonanywhere.com/";

function PieChart() {
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

  const sectorPercent = []
  let total = 0
  for (var j = 0; j < sectorCount.length; j++){
      total += sectorCount[j]
  }
  for (var x = 0; x < sectorCount.length; x++) {
    sectorPercent.push((Math.round((sectorCount[x]/total)*100)*100)/100)
  }

  return (
    <div className="chart-container">
      <Pie
        data={
            {labels: labels,
            datasets: [{data: sectorPercent,
            backgroundColor: ''}]}}
        height = "300px"
        options={{
            plugins: {
            title: {
              display: true,
              text: "% Of Total Orders By Sector"
            }
            }
        }}
      />
    </div>
  );
}
export default PieChart;