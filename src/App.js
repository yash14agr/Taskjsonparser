import { useState, useEffect } from 'react';
import './App.css';
import data from './data/data.json';


function App() {
  const [mainData, setMainData] = useState();

  //Parsing the Data
  const getData = () => {
    let mainData1 = JSON.parse(JSON.stringify(data))
    setMainData(mainData1)
  }

  //parsing data on initial render
  useEffect(() => {
    getData()

  }, [])


  return (
    <>
      <p className="Heading">
        JSON Parser
      </p>

      {/* Continents Data */}
      <div className="CardContainer">
        <p className="CardHead"> Continents :</p>
        {
          mainData && mainData.result.continents.map((data, index) => {
            return (<div key={index} className="card">{data.key}</div>)
          })
        }
      </div>

      {/* Departure Port Data */}
      <div className="CardContainer">
        <p className="CardHead"> departure_ports :</p>
        {
          mainData && mainData.result.departure_ports.map((data, index) => {
            return (<div key={index} className="card">{data.key}</div>)
          })
        }
      </div>

      {/* vessels Data */}
      <div className="CardContainer">
        <p className="CardHead"> vessels :</p>
        {
          mainData && mainData.result.vessels.map((data, index) => {
            return (<div key={index} className="card">{data.key}</div>)
          })
        }
      </div>

      {/* Sailing Month Data */}
      <div className="CardContainer">
        <p className="CardHead"> sailing_months :</p>
        {
          mainData && mainData.result.sailing_months.map((data, index) => {
            return (<div key={index} className="card">{data.key_as_string}</div>)
          })
        }
      </div>

      {/* Total Packages Data */}
      <div className="CardContainer">
        <p className="CardHead">Total Packages : </p>
        <div className="card">
          {
            mainData && mainData.result.allPackages.length
          }
        </div>
      </div>


      {/* Sailing Dates Data */}
      <div className="CardContainer">
        <p className="CardHead"> sailing_dates :</p>
        <div className="CardContainer">

          {

            mainData && mainData.result.sailing_dates.map((data, index) => {
              return (<div key={index} className="card">{data.key_as_string}</div>)
            })
          }
        </div>
      </div>


    </>
  );
}

export default App;
