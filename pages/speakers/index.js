import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetPresenters,
  WidgetVideoWithEventInfo,
  WidgetRegForm
} from 'eventjuicer-site-components';

import Partners from '../../compositions/Partners'


const settings = require('../../settings').default;



const PagePresenters = () => (
  <>
  <WidgetPresenters wrapperProps={{
    label: "virtual.presenters.title",
    secondaryLabel: "virtual.presenters.description"
    }} limit={100} link={(item) => `/speakers/${item.id}` } />

  <WidgetVideoWithEventInfo />

  <WidgetRegForm setting="streaming_user.register" />

  <Partners />

  </>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["presenters"],
    cache: 60
  })

})

export default connect()(PagePresenters);
