import React from 'react'

import {
  connect,
  WidgetRegForm,
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

import Partners from '../compositions/Partners'
import Schedule from '../compositions/Schedule'
import ThematicTracks from '../compositions/ThematicTracks'

const settings = require('../settings').default;

const PageIndex = (props) => (
  <React.Fragment>
  <Schedule /> 
  <WidgetRegForm setting="streaming_user.register" />    
  <ThematicTracks />
  <Partners />
  </React.Fragment>
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: ["presenters"]
  })
  
})

export default connect()(PageIndex);
