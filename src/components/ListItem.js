import React from 'react'

function ListItem({death, discharged, casesOnAdmission, state, confirmedCases }) {
    return (
        <tr>
          
                <td>{state}</td>  
                <td>{casesOnAdmission}</td>
                <td>{discharged}</td>
                <td>{death}</td>
                <td>{confirmedCases}</td>
                            
        </tr>
    )
}

export default ListItem
