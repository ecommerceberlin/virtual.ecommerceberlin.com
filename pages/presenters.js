import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetPartners,
  reduxWrapper,
  configure,
  WidgetBanner,
  WidgetPresenters
} from 'eventjuicer-site-components';

 

const settings = require('../settings').default;

import Partners from '../compositions/Partners'

const PageIndex = (props) => (
   
  <React.Fragment>

  <WidgetPresenters wrapperProps={{
    label: "virtual.presenters.title",
    secondaryLabel: "virtual.presenters.description"
  }} limit={100} />

  <WidgetVideoWithEventInfo />

  <Partners/>

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['presenters']
  })

  return {props: {}, revalidate: 10}

  
})

export default connect()(PageIndex);
