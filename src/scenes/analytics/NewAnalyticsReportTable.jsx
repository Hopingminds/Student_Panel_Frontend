import React, { useState, useEffect } from "react";
import axios from "axios";

function NewAnalyticsReport({ data, selectedGraph }) {
  const [data1, setData1] = useState();
  const [entriesPerPage, setEntriesPerPage] = useState(5);


  return (
    <div className="mainClass container w-96">
      <div className=" ">
        <div className="w-full">
          {data.map((item) => {
            const dateObject = new Date(item.Date);
            const formattedDate = dateObject.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            return (
              <>
              
                {selectedGraph === "Total" && (
                  <div className="text-xs  lg:text-xl py-3 px-6 mt-[-1rem] font-mono">
                    <p className="py-1">Attempted On: {formattedDate}</p>
                    <hr />
                    <p className="py-1">Rank:  {item.Rank}</p><hr />
                    <p className="py-1">Total Time Taken: {item.TotalTimeTaken}</p><hr />
                    <p className="py-1">TOTAL TIME: {item.TimeDuration}</p><hr />
                    <p className="py-1">Correct: {item.TotalCorrect}</p><hr />
                    <p className="py-1">Incorrect: {item.Totalincorrect}</p><hr />
                    <p className="py-1">Skipped: {item.Totalskipped}</p><hr />
                    <p className="py-1">Marks Obtained: {item.Total_Marks_obt}</p><hr />
                    <p className="py-1">Marks Percentage: {item.Overall_Prec ? item.Overall_Prec.toFixed(2) : 0}%</p><hr />
                  </div>
                )}
                {selectedGraph === "Apti" && (
                  <div className="text-xl py-3 px-6 mt-1 font-mono">
                    <p className="py-1">Attempted On: {formattedDate}</p>
                    <hr />
                    <p className="py-1">Rank: {item.Rank}</p><hr />
                    <p className="py-1">Total Time Taken: {item.AptiTimeTaken}</p><hr />
                    <p className="py-1">TOTALTIME: {item.Aptiincorrect}</p><hr />
                    <p className="py-1">Correct: {item.Apticorrect}</p><hr />
                    <p className="py-1">Incorrect: {item.Aptiincorrect}</p><hr />
                    <p className="py-1">Skipped: {item.AptiSkipped}</p><hr />
                    <p className="py-1">Marks Obtained: {item.Apti}</p><hr />
                    <p className="py-1">Marks Percentage: {item.Apti_Prec ? item.Apti_Prec.toFixed(2) : 0}%</p><hr />
                  </div>
                )}
                {selectedGraph === "Pdp" && (
                  <div key={item._id} className=" text-xl py-3 px-6 mt-3 font-mono ">
                    <p className="py-1">Attempted On: {formattedDate}</p>
                    <hr />
                    <p  className="py-1">Rank: {item.Rank}</p><hr />
                    <p className="py-1">Total Time Taken: {item.PDTotalTimeTaken}</p><hr />
                    <p className="py-1">TOTAL TIME: {item.PDTimeDuration}</p><hr />
                    <p className="py-1">Correct: {item.PDcorrect}</p><hr />
                    <p className="py-1">Incorrect: {item.PDincorrect}</p><hr />
                    <p className="py-1">Skipped: {item.PdSkipped}</p><hr />
                    <p className="py-1">Marks Obtained: {item.PD}</p><hr />
                    <p className="py-1">Marks Percentage: {item.PD_Prec ? item.PD_Prec.toFixed(2) : 0}%</p><hr />
                  </div>
                )}
                {selectedGraph === "Technical" && (
                  <div className="text-xl py-3 px-6 mt-3 font-mono">
                    <p className="py-1">
                      Attempted On:{"   "}
                      {formattedDate}
                    </p>
                    <hr />
                    <p className="py-1">Rank:{item.Rank}</p><hr />
                    <p className="py-1">Total Time Taken:{item.TECHTotalTimeTaken}</p><hr />
                    <p className="py-1">TOTAL TIME:{item.TECHTimeDuration}</p><hr />
                    <p className="py-1">Correct:{item.TECHcorrect}</p><hr />
                    <p className="py-1">Incorrect:{item.TECHincorrect}</p><hr />
                    <p className="py-1">Skipped:{item.TECHSkipped}</p><hr />
                    <p className="py-1">Marks Obtained:{item.Tech}</p><hr />
                    <p className="py-1">Marks Percentage:{item.TECH_Prec ? item.TECH_Prec.toFixed(2) : 0} %</p><hr />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* <Leaderboard/> */}
    </div>
  );
}

export default NewAnalyticsReport;
