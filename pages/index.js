import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetPartners,
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

  <WidgetPartners
    label="partners.media.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('media') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    limit={50}
  />

  <WidgetPartners
    label="partners.community.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('community') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    limit={50}
  />

  <WidgetPartners
    label="partners.communication.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('communication') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    center={true}
    limit={50}
  />

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageIndex);
