import React from 'react'

import {WidgetPartners, WidgetRoleButtons} from 'eventjuicer-site-components'



const Partners = () => (<React.Fragment>

<WidgetPartners
label="partners.headline.title"
filter={item =>
item['scopes(deprecated)'].indexOf('headline') > -1 &&
item.logotype.indexOf('cloudinary') > -1
}
center={true}
limit={50}
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


  <WidgetRoleButtons />

</React.Fragment>)


export default Partners