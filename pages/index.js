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
    label: "virtual.presenters.title",
    secondaryLabel: "virtual.presenters.description"
  }} limit={8} />

  <WidgetRoleButtons />

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
