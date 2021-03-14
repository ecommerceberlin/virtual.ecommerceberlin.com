import React from 'react'

import {WidgetPartners} from 'eventjuicer-site-components'



const Partners = () => (<React.Fragment>

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

</React.Fragment>)


export default Partners