import { useState } from 'react';
import '../styles/mc.css';

export default function MonthlyCommitments() { 

    const [ addRow, setAddRow ] = useState([{}]); 
    const [ addVirableIncomeRow, setAddVirableIncomeRow ] = useState([{}]); 

    const handleAddRow = () => {
        setAddRow([...addRow, {}]);
    }

    const handleAddRowVariableIncome = () => {
        setAddVirableIncomeRow([...addVirableIncomeRow, {}]);
    }

    return (
        <div>
            <div className="m-c-outer">
                <section className="s-1">
                    <div className='d-1'>
                        <div className='div-1'>
                            <span className='span-1'>DSR without the Stress Factor of 1%</span>
                            <span className='span-2'>35%</span>
                        </div>
                    </div>
                    <div className='d-2'>
                        <div className='div-2'>
                            <span className='span-1'>DSR without the Stress Factor of 1%</span>
                            <span className='span-2'>38%</span>
                        </div>
                    </div>
                </section>

                <section className="s-2">
                    <span className='m-c-span'>Monthly Commitments</span>
                </section>

                <section className="s-3">
                    <div className="s-3-d1">
                        <div className="s3dd1">Description</div>
                        <div className="s3dd2">Value</div>
                    </div>

                    {addRow.map(eachRow => (
                        <div className="s-3-d1">
                            <div className='s3desc-input'>
                                <input placeholder="" className="s3dd1 s3dd2-1" />
                            </div>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                    ))}
                </section>
                <button className="button-add-row" type="button" onClick={() => handleAddRow()}>+ Add Row</button>
            </div>

            <div className="m-c-outer">
                <section className="s-1vi">
                    <div className='d-1vi'>
                        <div className='div-1-vi'>
                            <span className='span-vi'>70% of Average Monthly Variable Income</span>
                            <span className='span-vi2'></span>
                        </div>
                    </div>
                </section>

                <section className="s-2">
                    <span className='m-c-span'>Variable Income</span>
                </section>

                <section className="s-3">
                    <div className="s-3-d1">
                        <div className="s3dd1">Description</div>
                        <div className="s3dd2 mnth">Month 1</div>
                        <div className="s3dd2 mnth">Month 2</div>
                        <div className="s3dd2 mnth">Month 3</div>
                        <div className="s3dd2 mnth">Month 4</div>
                        <div className="s3dd2 mnth">Month 5</div>
                        <div className="s3dd2 mnth">Month 6</div>
                        <div className="s3dd2 mnth">Month 7</div>
                        <div className="s3dd2 mnth">Month 8</div>
                        <div className="s3dd2 mnth">Month 9</div>
                        <div className="s3dd2 mnth">Month 10</div>
                        <div className="s3dd2 mnth">Month 11</div>
                        <div className="s3dd2 mnth">Month 12</div>
                        <div className="s3dd2 mnth">Total</div>
                    </div>

                    {
                    addVirableIncomeRow.map(vr => (
                    <div className="s-3-d1">
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1 inp-desc-2" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <div className='s3desc-input'>
                            <input placeholder="" className="s3dd1 s3dd2-1" />
                        </div>
                        <input placeholder="" className="s3dd1 s3dd2-1" />
                    </div>
                    ))
                    }
                </section>

                <button className="button-add-row" type="button" onClick={() => handleAddRowVariableIncome()}>+ Add Row</button>

                <div className='last-border'></div>

                <button className='btn-calc'>Calculate</button>
            </div>
        </div>
    )
}