import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetPremiumTickets
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PagePremium = () => <div></div>
  
    // <WidgetPremiumTickets />


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

})

export default connect()(PagePremium);
