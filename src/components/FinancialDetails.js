import "../styles/basicdetails.css";

export default function FinancialDetails() {
    return (
        <div className="basic-details-outer financial-details-outer">

            <p className="pbd">Financial Details</p>

            <section className="section-one section">
                <div>
                    <label htmlFor="tax-on-payslip">Tax (as captured on the payslip)</label>
                    <br />
                    <input placeholder="" name="tax-on-payslip" className="inp" />
                </div>

                <div>
                    <label htmlFor="loan-amount">Loan Amount (customer request)</label>
                    <br />
                    <input placeholder="" name="loan-amount" className="inp" />
                </div>

                <div>
                    <label htmlFor="e-d-p">Eligible Discount Percentage</label>
                    <br />
                    <input placeholder="" name="e-d-p" className="inp" />
                </div>
            </section>
            
            <section className="section-three section">
                <div>
                    <label htmlFor="card-limit">Card Limit</label>
                    <br />
                    <input placeholder="" name="card-limit" className="inp" />
                </div>

                <div>
                    <label htmlFor="od-limit">OD Limit</label>
                    <br />
                    <input placeholder="" name="od-limit" className="inp" />
                </div>

                <div className="radio-buttons">
                    <span className="spanlt">Add-On</span>
                    <br />
                    <div className="rbi">
                        <input type="checkbox" name="credit-card" value="credit-card" />
                        <label htmlFor="credit-card">Credit Card</label>

                        <input type="checkbox" name="over-draft" value="over-draft" />
                        <label htmlFor="over-draft">Over Draft</label>
                    </div>
                </div>
            </section>

            <section className="section-one section">
                <div>
                    <label htmlFor="employer">Employer</label>
                    <br />
                    <input placeholder="" name="employer" className="inp" />
                </div>

                <div>
                    <label htmlFor="industry-sector">Industry Sector</label>
                    <br />
                    <input placeholder="" name="industry-sector" className="inp" />
                </div>

                <div>
                    <label htmlFor="risk-classification">Risk Classification</label>
                    <br />
                    <input placeholder="" name="risk-classification" className="inp" />
                </div>
            </section>

            <section className="section-one section">
                <div className="desc-w">
                    <label style={{maxWidth: "300px"}} htmlFor="max-tenor">Max Tenor Based on Gross Income as per Lending Framework Income, Segment & Industry sector</label>
                    <br />
                    <input placeholder="" name="max-tenor" className="inp" />
                </div>

                <div className="desc-right-side">
                <div>
                    <label htmlFor="max-unsecured-exp">Maximum Unsecured Exposure as per Lending Framework</label>
                    <br />
                    <input placeholder="" name="max-unsecured-exp" className="inp" />
                </div>

                <div>
                    <label htmlFor="max-loan-amt">Maximum Loan Amount (excluding card & overdraft Limit)</label>
                    <br />
                    <input placeholder="" name="max-loan-amt" className="inp" />
                </div>
                </div>
            </section>

            <section className="section-one section">
                <div>
                    <label htmlFor="max-tenor-age-based">Maximum Tenor (months) based on age</label>
                    <br />
                    <input placeholder="" name="max-tenor-age-based" className="inp" />
                </div>

                <div>
                    <label htmlFor="tenor-in-months">Tenor in Months (customer request)</label>
                    <br />
                    <input placeholder="" name="tenor-in-months" className="inp" />
                </div>

                <div>
                    <label htmlFor="interest-rate">Interest Rate %</label>
                    <br />
                    <input placeholder="" name="interest-rate" className="inp" />
                </div>
            </section>
        
        </div>
    )
}