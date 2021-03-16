import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetPresenters,
  WidgetVideoWithEventInfo,
  WidgetRegForm
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PagePresenters = () => (
  <>
  <WidgetPresenters wrapperProps={{
    label: "virtual.presenters.title",
    secondaryLabel: "virtual.presenters.description"
    }} limit={100} link={(item) => `/speakers/${item.id}` } />

  <WidgetVideoWithEventInfo />

  <WidgetRegForm setting="streaming_user.register" />
  </>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

})

export default connect()(PagePresenters);
