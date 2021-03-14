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

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CodeIcon from '@material-ui/icons/Code';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LanguageIcon from '@material-ui/icons/Language';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
