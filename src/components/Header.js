import React from 'react'
import './Header.css'

function Header({death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested}) {
    return (
        death ? <div className = "top-head">
        <div className="box grey"><span className="text">Samples Tested</span><span className="numbers">{totalSamplesTested}</span></div>
        <div className="box blue"><span className="text">Confirmed Cases</span><span className="numbers">{totalConfirmedCases}</span></div>
        <div className="box green"><span className="text">Discharged</span><span className="numbers">{discharged}</span></div>
        <div className="box yellow"><span className="text">Active Cases</span><span className="numbers">{totalActiveCases}</span></div>
        <div className="box red"><span className="text">Deaths</span> <span className="numbers">{death}</span> </div>
    </div> : <p>The  connection to the API is lost</p>
    )
}

export default Header
