import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  reduxWrapper,
  configure,
  WidgetTicketOwners,
  WidgetPresenters,
  WidgetRoleButtons
} from 'eventjuicer-site-components';

import {
  TrendingUpIcon, 
  ImportantDevicesIcon, 
  CodeIcon, 
  CloudUploadIcon, 
  LocalShippingIcon,
  LanguageIcon,
  NewReleasesIcon, 
  ShoppingBasketIcon
} from '../compositions/Icons'

import Partners from '../compositions/Partners'

const settings = require('../settings').default;

const PageIndex = (props) => (

  <React.Fragment>

  <WidgetVideoWithEventInfo />

  <WidgetRegForm setting="streaming_user.register" />

  <WidgetRoleButtons setting="schedule_teaser" />

  <WidgetPresenters wrapperProps={{
  label: "virtual.presenters.featured",
  secondaryLabel: "virtual.presenters.description"
  }} limit={8} link={(item) => `/speakers/${item.id}` }  />

  <WidgetTicketOwners icons={{
  TrendingUpIcon, 
  ImportantDevicesIcon, 
  CodeIcon, 
  CloudUploadIcon, 
  LocalShippingIcon, 
  LanguageIcon, 
  NewReleasesIcon, 
  ShoppingBasketIcon
  }}/>

  <WidgetRoleButtons setting="schedule_teaser" />

  <WidgetRegForm setting="streaming_user.register" />

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
