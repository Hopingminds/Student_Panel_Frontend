import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { SinglefetchData, fetchData } from "./FetchDate";
import axios from "axios";
import Pdp from "./Pdp";
import Apti from "./Apti";
import Technical from "./Technical";
import NewAnalyticsReport from "./NewAnalyticsReportTable";
import Total from "./Total";
import Leaderboard from "./Leaderboard";

const NewAnal = ({ selectedDate, setSelectedDate,selectedGraph, setSelectedGraph }) => {
  const [dates, setDates] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        var url = "";
        if (selectedGraph === "Total") {
          url = "/getSingleData";
        } else if (selectedGraph === "Apti") {
          url = "/getAptiDate";
        } else if (selectedGraph === "Pdp") {
          url = "/getPDDate";
        } else if (selectedGraph === "Technical") {
          url = "/getTechDate";
        }
        const response = await axios.get(url);
        const datesData = response.data.map((item) => {
          const dateObject = new Date(item.Date);
      const formattedDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
      return formattedDate;
        });
        // Remove duplicates using Set
        
        const uniqueDates = [...new Set(datesData)];
       
        setDates(uniqueDates);

        // Automatically select the first date from the datesData array
        if (datesData.length > 0) {
          setSelectedDate(datesData[0]);
        }
      } catch (error) {
        console.error("Error fetching dates:", error);
      }
    };

    fetchDates();
  }, [selectedGraph]);
  useEffect(() => {
    const fetchDataForSelectedDate = async () => {
      if (selectedDate) {
        let data = await SinglefetchData(selectedDate, selectedGraph);
        // console.log(selectedGraph,'fetchdata',data)
        setData(data);
      }
    };
    fetchDataForSelectedDate();
  }, [selectedDate, selectedGraph]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGraphSelect = (graphType) => {
    setSelectedGraph(graphType);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center ml-10 mt-3">
        <h1 className="font-semibold">Test Date :</h1>
        <select
          id="dateSelect"
          value={selectedDate}
          onChange={handleDateChange}
          className="ml-1"
        >
          <option value="">Select a date</option>
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-10 mt-3 flex items-center">
        <h1 className="font-semibold mr-2">Select Subject:</h1>
        <Dropdown onSelect={handleGraphSelect}>
          <Dropdown.Toggle variant="white" id="graphSelectionDropdown">
            {selectedGraph}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Total" active={selectedGraph === "Total"}>
              Total Marks
            </Dropdown.Item>
            <Dropdown.Item eventKey="Apti" active={selectedGraph === "Apti"}>
              Apti Marks
            </Dropdown.Item>
            <Dropdown.Item eventKey="Pdp" active={selectedGraph === "Pdp"}>
              Pdp Marks
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="Technical"
              active={selectedGraph === "Technical"}
            >
              Technical Marks
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <div>
          <div className=" sm:border  mx-10  min-w-[3px] max-w-[1500px]">
            <div className="text-3xl font-bold  text-center mt-4 text-red-500 ">
              Analysis
            </div>
            {selectedGraph === "Total" && (
              <div
                className="xs:flex xs:flex-col lg:flex items-center justify-center sm:gap-4 py-5 shadow-green-300 mx-auto my-auto"
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(10%)",
                }}
              >
                <div className="flex mt-[-4rem] py-8 px-3">
                  <NewAnalyticsReport
                    data={data}
                    selectedGraph={selectedGraph}
                  />
                </div>

                <Total className="" />
              </div>
            )}
            {/* </div> */}

            {selectedGraph === "Apti" && (
              <div
                className="flex items-center shadow-green-300 gap-4 py-5   ml-10 max-w-screen-lg"
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(10%)",
                }}
              >
                <div className="flex mt-[-4rem] py-8 px-3 ">
                  <NewAnalyticsReport
                    data={data}
                    selectedGraph={selectedGraph}
                  />
                </div>
                <Apti className="flex gap-20 ml-10 px-4" />
              </div>
            )}

            {selectedGraph === "Pdp" && (
              <div
                className="sm:flex :items-center shadow-green-300 gap-10 py-5  ml-10 max-w-screen-lg"
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(10%)",
                }}
              >
                <div className="sm:flex mt-[-4rem] py-8 px-3">
                  <NewAnalyticsReport
                    data={data}
                    selectedGraph={selectedGraph}
                  />
                </div>
                <Pdp className="sm:flex gap-20 ml-10 px-4" />
              </div>
            )}

            {selectedGraph === "Technical" && (
              <div
                className="flex items-center shadow-green-300 gap-10 py-5 ml-10 max-w-screen-lg"
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(10%)",
                }}
              >
                <div className="flex mt-[-4rem] py-8 px-3">
                  <NewAnalyticsReport
                    data={data}
                    selectedGraph={selectedGraph}
                  />
                </div>
                <Technical className="flex gap-20 ml-10 px-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnal;
