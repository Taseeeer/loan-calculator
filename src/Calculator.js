import BasicDetails from "./components/BasicDetails";
import FinancialDetails from "./components/FinancialDetails";
import Header from "./components/Header";
import MonthlyCommitments from "./components/MonthlyCommitments";

import "./styles/calculator.css";

export default function Calculator() {
    return (
        <>
        <Header />
        <div className="outer-most">
            <BasicDetails />
            <FinancialDetails />
            <MonthlyCommitments />
        </div>
        </>
    );
};