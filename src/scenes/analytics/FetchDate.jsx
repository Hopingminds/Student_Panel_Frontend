// api.js
import axios from "axios";

export const fetchData = async (selectedDate) => {
  try {
    const url = "/getDateData";
    const response = await axios.get(url, {
      params: {
        date: selectedDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const SinglefetchData = async (selectedDate,selectedGraph) => {
  try {
    var url='';

    if(selectedGraph === "Total"){
      url = "/getDateData";  
   }else if(selectedGraph === "Apti"){
     url = '/getSingleAptiUsers';
   }else if(selectedGraph === "Pdp"){
     url = '/getSinglePDUsers';
    }else if(selectedGraph === "Technical"){
     url = '/getSingleTechUsers';
   }
     
    const response = await axios.get(url, {
      params: {
        date: selectedDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
