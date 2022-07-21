import "../styles/basicdetails.css";
import Select from 'react-select';
import { useState } from "react";

export default function BasicDetails() {

    const [loanTypeInput, setLoanTypeInput] = useState("");

    const handleLoanTypeInput = (e) => {
        setLoanTypeInput(e.target.value);
    }

    const showLoadTypesOrNot = () => {
        if(loanTypeInput === "secured") {
            return (
                <div className="react-select" style={{paddingLeft: "5.9rem"}}>
                    <label htmlFor="secured-loan-type">Secured</label>
                    <Select options={[{label: "Basic", value: "basic"}]} placeholder="" name="secured-loan" className="react-input" />
                </div> 
            );
        } else if(loanTypeInput === "unsecured") {
            return (
                <div className="react-select" style={{paddingLeft: "5.9rem"}}>
                    <label htmlFor="unsecured-loan-type">Unsecured</label>
                    <Select options={[{label: "Basic", value: "basic"}]} placeholder="" name="unsecured-loan" className="react-input" />
                </div> 
            );
        } else {
            return null;
        }
    }

    return(
        <div className="basic-details-outer">
            <p className="pbd">Basic Details</p>

            <section className="section-one section">
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <br />
                    <input placeholder="" name="first-name" className="inp" />
                </div>

                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <br />
                    <input placeholder="" name="last-name" className="inp" />
                </div>

                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <br />
                    <input placeholder="" name="dob" type="date" className="inp" />
                </div>
            </section>

            <section className="section-two section">
                <div className="react-select">
                    <label htmlFor="segment">Customer Type</label>
                    <Select options={[{label: "Basic", value: "basic"}]} placeholder="" name="segment" className="react-input" />
                </div> 

                <div className="react-select">
                    <label htmlFor="segment">Segment</label>
                    <Select options={[{label: "Basic", value: "basic"}]} placeholder="" name="segment" className="react-input" />
                </div> 

                <div>
                    <label htmlFor="basic-salary">Basic Salary</label>
                    <br />
                    <input placeholder="" name="basic-salary" className="inp" />
                </div>
            </section>

            <section className="section-three section">
                <div>
                    <label htmlFor="gross-monthly-income">Gross Monthly Icome</label>
                    <br />
                    <input placeholder="" name="gross-monthly-income" className="inp" />
                </div>

                <div className="radio-buttons">
                    <span className="spanlt">Loan Type</span>
                    <br />
                    <div className="rbi">
                        <input type="radio" name="loan-type" value="secured" onClick={(e) => handleLoanTypeInput(e)} />
                        <label htmlFor="secured">Secured</label>

                        <input type="radio" name="loan-type" value="unsecured" onClick={(e) => handleLoanTypeInput(e)} />
                        <label htmlFor="unsecured">Unsecured</label>
                    </div>
                </div>
                {
                    showLoadTypesOrNot()
                }
            </section>
        </div>
    )
}