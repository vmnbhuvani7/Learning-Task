import React, { Component } from 'react'

export class DateSort extends Component {
    render() {
        let activities = [
            { title: 'Hiking', date: new Date('2019-06-28') },
            { title: 'Shopping', date: new Date('2019-06-10') },
            { title: 'Trekking', date: new Date('2019-06-22') }
          ]
          const sortedActivities = activities.sort((b, a) => b.date - a.date)
        //   const sortedActivities = activities.slice().sort((b, a) => b.date - a.date)
        console.log(sortedActivities);
        return (
            <div>
                
            </div>
        )
    }
}

export default DateSort
