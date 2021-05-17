import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  reduxWrapper,
  configure,
  WidgetPresenters,
  WidgetRoleButtons
} from 'eventjuicer-site-components';


import Partners from '../compositions/Partners'
import ThematicTracks from '../compositions/ThematicTracks'
const settings = require('../settings').default;

const PageIndex = (props) => (

  <React.Fragment>


  <WidgetVideoWithEventInfo />

  <WidgetRegForm setting="streaming_user.register" />

  <WidgetPresenters wrapperProps={{
    label: "virtual.presenters.featured",
    secondaryLabel: "virtual.presenters.description"
  }} limit={8} link={(item) => `/speakers/${item.id}` }  />

  <ThematicTracks />

  <Partners />

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageIndex);
