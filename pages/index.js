import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  // WidgetRegForm,
  reduxWrapper,
  configure,
  // WidgetPresenters,
  // WidgetRoleButtons,
  WidgetStage,
  WidgetSchedule
} from 'eventjuicer-site-components';

import Partners from '../compositions/Partners'
// import ThematicTracks from '../compositions/ThematicTracks'

const settings = require('../settings').default;

const PageIndex = (props) => (

  <React.Fragment>

  <WidgetVideoWithEventInfo />

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

  <WidgetStage setting="streaming1" stage="a" />
  <WidgetStage setting="streaming1" stage="b" />



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
        
        
  <WidgetStage setting="streaming2" stage="a" />
  <WidgetStage setting="streaming2" stage="b" />


  {/* <WidgetRegForm setting="streaming_user.register" /> */}
  {/* <WidgetRoleButtons setting="schedule_teaser" /> */}
  {/* <WidgetPresenters wrapperProps={{
  label: "virtual.presenters.featured",
  secondaryLabel: "virtual.presenters.description"
  }} limit={8} link={(item) => `/speakers/${item.id}` }  /> */}
  {/* <ThematicTracks /> */}
  {/* <WidgetRoleButtons setting="schedule_teaser" /> */}
  {/* <WidgetRegForm setting="streaming_user.register" /> */}

  <Partners />
  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: [],
    cache: 60
  })
  
})

export default connect()(PageIndex);
