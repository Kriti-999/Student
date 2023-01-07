import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [student, setStudent] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const submit = () => {
        axios.post("http://localhost:3001/registerstudent", {
            student: student,
            rollNumber: rollNumber,
            checkIn: checkIn,
            checkOut: checkOut,
        }).then((res) => {
            
            if (res.data === "Register") {
                navigate("/home")
            }
            //alert(res.data);
        }

        )

    }
    return (
        <div>
            <h1 style={{fontSize:"30px"}}>Student Registration</h1> 
        <div class="form-wrapper">
       
            <form>
                <div class="form-item">
                    <label for="email"></label>
                    <input type="text"
                        placeholder="Enter Student Name"
                        className="form-control"
                        style={{ margin: '10px' }}
                        onChange={(event) => {
                            setStudent(event.target.value);

                        }}
                        value={student}

                    />
                </div>
                <div class="form-item">
                    <label for="password"></label>
                    <input type="text"
                        placeholder="Enter Roll Number"
                        className="form-control"
                        style={{ margin: '10px' }}
                        onChange={(event) => {
                            setRollNumber(event.target.value);

                        }}
                        value={rollNumber}
                    />
                </div>
                <div class="form-item">
                    <label for="password"></label>
                    <input type="text"
                        placeholder="Enter Check In Time"
                        className="form-control"
                        style={{ margin: '10px' }}
                        onChange={(event) => {
                            setCheckIn(event.target.value);

                        }}
                        value={checkIn}
                    />
                </div>
                <div class="form-item">
                    <label for="password"></label>
                    <input type="text"
                        placeholder="Enter Check Out Time"
                        className="form-control"
                        style={{ margin: '10px' }}
                        onChange={(event) => {
                            setCheckOut(event.target.value);

                        }}
                        value={checkOut}
                    />
                </div>
            </form>
            <div class="button-panel">
            <button class="button"onClick={submit}>Submit</button>
            </div>
            
        </div>
        </div>



    )


}




export default Register;
