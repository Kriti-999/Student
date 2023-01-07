import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [students, setStudent] = useState([]);
  // const {id} =useParams();
  
  function loadStudent() {
    
    axios.get("http://localhost:3001/allstudent").then((res) => {
      setStudent(res.data);
    });
    
  }
  function deleteStudent(Id) {
 
    axios.post("http://localhost:3001/deletestudent",{id:Id}).then(loadStudent());
  }
  useEffect(() => {
    loadStudent();
  });

  return (
    <>
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
            <Link to={`/`} className="text-2xl text-teal-200 font-semibold font-Montesarrat">Register Student</Link>
            
        </div>
    </>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">All Student</h1>
        <h2 className="text-3xl font-bold">{students.length}</h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                    
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Student
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Roll Number
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Check In Time
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Check Out Time
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Delete Student
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {students.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.student}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.rollNumber}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.checkIn}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.checkOut}
                        </td>
                        
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <button
                            
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                           
                            onClick={() => { deleteStudent(data.id)}}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
