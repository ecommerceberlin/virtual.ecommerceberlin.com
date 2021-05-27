import React from 'react'

import {
  WidgetSchedule
} from 'eventjuicer-site-components';



const Schedule = () => {

    return (
        <>
        <WidgetSchedule 
            key="2021-05-26"
            inserts={{
                "A08:59": [["id", 122008]],
                "B08:59": [["id", 122043]],
                "A10:59": [["id", 122030]],
                "B10:59": [["id", 121981]],
            }}
            day="2021-05-26" 
            wrapperProps={{label:"schedule.day1.title"}} 
        />

        <WidgetSchedule 
            key="2021-05-27"
            inserts={{
                "A08:59": [["id", 122041]],
                "B08:59": [["id", 122032]],
                "A10:59": [["id", 122029]],
                "B10:59": [["id", 121989]],
            }}
            day="2021-05-27" 
            wrapperProps={{label:"schedule.day2.title"}} 
        />

        </>
    )
}

export default Schedule