import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  reduxWrapper,
  configure,
  WidgetTicketOwners,
  WidgetPresenters,
  WidgetRoleButtons,
  WidgetSchedule
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

    <WidgetSchedule day="2021-05-26" wrapperProps={{label:"schedule.day1.title"}} />
    <WidgetSchedule day="2021-05-27" wrapperProps={{label:"schedule.day2.title"}} />

  {/* <WidgetVideoWithEventInfo />

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

  <WidgetRegForm setting="streaming_user.register" />

  <WidgetPresenters wrapperProps={{
    label: "virtual.presenters.featured",
    secondaryLabel: "virtual.presenters.description"
  }} limit={8} link={(item) => `/speakers/${item.id}` }  />

  <WidgetRoleButtons /> */}

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
