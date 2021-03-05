import React from 'react'

import {
  connect,
 
  // MyLink as Link,
  // FsVideo,
  WidgetVideoWithEventInfo,
  //WidgetVideoWithReviews,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetSalesMap,
  // WidgetPresenters,
  WidgetSchedule,
  // WidgetExhibitors,
  WidgetRoleButtons,
  Wrapper,
  Facebook,
  WidgetPartners,
  WidgetPresentersAll,
  reduxWrapper,
  configure,
 // WidgetFeaturedPresenters
} from 'eventjuicer-site-components';
 

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>


  {/* <WidgetSchedule /> */}

  <WidgetVisitor
    label="visitors.register"
    secondaryLabel="event.parties"
    first
  />

  <WidgetVideoWithEventInfo />

  <WidgetFeaturedCompanies />

  {/* <WidgetSalesMap
    label="exhibitors.map.title2"
    secondaryLabel="exhibitors.map.opensales"
  /> */}

  {/* <WidgetPresentersAll /> */}

  <WidgetRoleButtons first={true} />

  {/* <FeaturedExhibitors /> */}

  {/* <WidgetVisitor
    label="visitors.register_alt"
    secondaryLabel="event.parties"
  /> */}

  {/* <WidgetVideoWithReviews overlay="black" /> */}

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}

  <WidgetVisitor
    label="visitors.register"
    secondaryLabel="event.parties"
  />

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

   <WidgetAllExhibitorsColumnList />

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: []
  })

  return {
    props: {}, 
    revalidate: 1
  }
  
})

export default connect()(PageIndex);
