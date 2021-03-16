import {
    connect,
    WidgetRegForm,
    WidgetPresenter,
    WidgetPresenters,
    // WidgetSchedule,
    WidgetVideoWithEventInfo,
    // WidgetRoleButtons,
    reduxWrapper,
    configure,
    HeadSpeaker
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  const settings = require('../../settings').default;


  const PageSpeaker = ({id}) => (<>

      <HeadSpeaker id={id} path="/speakers">{(data)=><Head>{data}</Head> }</HeadSpeaker>

      <WidgetPresenter id={id} path="/speakers" />

      <WidgetVideoWithEventInfo />

      <WidgetRegForm setting="streaming_user.register" />

      <WidgetPresenters wrapperProps={{
      label: "virtual.presenters.featured",
      secondaryLabel: "virtual.presenters.description"
      }} limit={8} />

  </>
)

export async function getStaticPaths() {
    
    return {
      paths: [],
      fallback: "blocking"
    }
}

  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    const {params: {id}} = props;

    const resource = `presenters/${id}`;

    return await configure(props, {
      settings : settings,
      preload : [resource, "presenters"]
    })
  
  })
  
  
  export default connect()(PageSpeaker);
  