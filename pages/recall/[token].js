import React, {useEffect} from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    getUserByToken,
    Wrapper,
    Loading,
    useDispatch,
    setUserToken
  } from 'eventjuicer-site-components';
  
import {useRouter} from 'next/router'

  import settings from '../../settings';
  
  const Recall = ({token, user, goto}) => {

    const router = useRouter();
    const dispatch = useDispatch();


    useEffect(()=>{
    
        if("id" in user){
           dispatch(setUserToken(token))
           router.push(goto)
        }
    })

     return  (
     <Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}>
         {"id" in user ? <Loading /> : <h1>Error. Bad URL.</h1>}
    </Wrapper>
    )

  }

Recall.disableLayout = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {

    const {query: {token = "", goto = "/stages/a"}} = props;

    const user = await getUserByToken(settings.system.service_api, token)

    //action when userrrrr is bad?

    await configure(props, {
        settings: settings
    })
    return {
        props: {
            token,
            user,
            goto
        },
    }  
})
  
  
export default connect()(Recall);
  
  
  
  /**
   * 
   * 
   * 
   * 

   {
  id: 124424,
  email: 'EMAIL',
  token: '7cac1be3.....1346aaeddfb',
  company_id: 0,
  event_id: 92,
  speaker_id: 0,
  group_id: 31,
  organizer_id: 5,
  parent_id: 0,
  important: 0,
  lang: 'pl',
  confirmed: 1,
  createdon: '2021-05-23 08:39:54',
  scannedon: 0,
  unsubscribed: 0,
  fields: {
    url: 'https://virtual.ecommerceberlin.com/',
    fname: 'FNAME',
    lname: 'LNAME',
    phone: 'PHONE',
    cname2: 'HOP LUN',
    position: 'POSITION'
  },
  roles: [ 'visitor' ],
  purchases: [
    {
      id: 128625,
      paid: 1,
      status: 'ok',
      status_source: 'auto',
      created_at: '2021-05-23 08:39:54',
      updated_at: '2021-05-23 08:39:54',
      tickets: [Array]
    }
  ],
  code: 'ywmkqq'
}

   * 
   * 
   *  error: {
    code: 500,
    message: 'Type error: Argument 1 passed to Eventjuicer\\Services\\SaveOrder::setParticipant() must be an instance of Illuminate\\Database\\Eloquent\\Model, null given, called in -components/src/Services/SaveOrder.php on line 95',
    debug: '',
    errno: '13813f572b4f483497f8fee5054cd390'
  }

   */