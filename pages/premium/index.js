import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetPremiumTickets
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

import {
  TrendingUpIcon, 
  ImportantDevicesIcon, 
  CodeIcon, 
  CloudUploadIcon, 
  LocalShippingIcon,
  LanguageIcon,
  NewReleasesIcon, 
  ShoppingBasketIcon
} from '../../compositions/Icons'

const PagePremium = () => (<WidgetPremiumTickets icons={{
      TrendingUpIcon, 
      ImportantDevicesIcon, 
      CodeIcon, 
      CloudUploadIcon, 
      LocalShippingIcon, 
      LanguageIcon, 
      NewReleasesIcon, 
      ShoppingBasketIcon
      }} />)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

})

export default connect()(PagePremium);
