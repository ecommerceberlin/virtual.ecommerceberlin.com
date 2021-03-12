import React from 'react'

import {
  connect,
  WidgetPremiumTicket,
  WidgetPremiumTickets,
  reduxWrapper,
  configure,
  get
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;


const PagePremiumSingle = ({name}) => null; 


// (

//   <div>
//     <WidgetPremiumTicket name={name} />
//     <WidgetPremiumTickets setting="premium" />
//   </div>
// )

 export async function getStaticPaths() {
  
  const request = await fetch(`${settings.system.api}/tickets`)
  const {data} = await request.json();
  const scope = get(settings, "premium.ticketgroups", []);
  const filtered = (data || []).filter(t => scope.includes(t.group_id) );
 
  const paths = filtered.map(row => ({ 
    params: {
      name : row.details_url.replace('/premium/', '')
    }
  }))

  return {
    paths: paths,
    fallback: true 
  };
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  const {params} = props

  await configure(props, {
    settings : settings,
    preload: ['tickets'],
  })

  return {
    props : {
      name : "name" in params ? params.name : ""
    },
    revalidate: 30
  }

})

export default connect()(PagePremiumSingle);
