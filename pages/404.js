import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetPresenters,
  WidgetRoleButtons
} from 'eventjuicer-site-components';
 
const settings = require('../settings').default;

import Partners from '../compositions/Partners'

const PageIndex = (props) => (
  <React.Fragment>
    <WidgetVideoWithEventInfo />
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
