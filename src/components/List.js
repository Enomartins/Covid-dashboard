import React from 'react'
import ListItem from './ListItem'
import './List.css'

function List({states}) {
    // console.log(states)
    return (
        states ? 
        <div className="tableContainer">
        <table>
            <thead>
                <tr>
                    <th className="title">State</th>
                    <th className="title">Current Cases</th>
                    <th className="title">Discharged Cases</th>
                    <th className="title">Deaths</th>
                    <th className="title">Confirmed Cases</th>
                </tr>
            </thead>
        {states ? 
        states.map(state => {
            // console.log(state)
            return (
                <tbody>
                    <ListItem className="App" key="state._id" {...state} />
                </tbody>
                )
        })
     : null}

    </table>
    
    </div> : null
    )
}

export default List
