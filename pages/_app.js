import React from 'react'
import { reduxWrapper, NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const MyCustomApp = (props) => <NextApp {...props} head={
    <MyHead 
        url="/" 
        image="https://res.cloudinary.com/eventjuicer/image/upload/v1620250720/ebev1_template_generic.png"
    >{(data) => <Head>{data}</Head>}</MyHead> 
} />

export default reduxWrapper.withRedux(MyCustomApp)
