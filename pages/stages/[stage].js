
import React from 'react'
import {
    connect,
    WidgetStage,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;
  import Schedule from '../../compositions/Schedule'

  const PageStage = ({stage}) => (

    <>
    <WidgetStage stage={stage} />
    <Schedule />
    </>
  )

  export async function getStaticPaths() {
  
    return {
      paths: [
        { params: { stage: "a"} },
        { params: { stage: "b"} }
      ],
      fallback: "blocking" 
    };
     
  }
  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
    
    const {params: {stage}} = props;

    await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })

    return {
      props : {
        stage: stage
      },
      revalidate : 60
    }
  })
  
export default connect()(PageStage);