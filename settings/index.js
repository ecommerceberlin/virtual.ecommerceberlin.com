const settings = {
    
    system : {
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://api.eventjuicer.workers.dev/?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26key%3Dx6_4tYYfoH19FsSulzP3Oi-SeuTx4N9K',
        api : "https://api.eventjuicer.com/v1/public/hosts/virtual.ecommerceberlin.com",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/virtual.ecommerceberlin.com/register",
        og_image : "https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615550856/virtualebe_reg.jpg",
        service_api : "https://api.eventjuicer.com/v1/services"
    },
    hero : {
        showable: ["date"],
        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1615909963/virtualebe.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615909961/virtualebe.jpg",
        overlay : "black",
        template : "heroGold",
        heading : "virtual.event.claim",
        subheading : "virtual.event.description",
        insert: "https://res.cloudinary.com/eventjuicer/image/upload/v1615929566/ebevheadline.png"
    },


    speakers : {
        og_template: "ebev1_template_en",
        baseLabel: "profile"       
    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                {name: 'speakers', to: '/speakers'},
                {name: 'schedule', to: '/schedule'},
                {name: 'sponsorship', to: '/premium'},
              ]
            },
            // {
            // name: 'exhibitors',
            // items: [
            //     {name: 'exhibit', to: '/exhibit'}, 
            // ]
            // }
        ]
    },

    sponsors : {
        wrapperProps: {
            label: "categories.title"
        },
        grid: {
            xl: 3, lg: 3, md: 4, sm: 6, xs: 6 
        },
        ticket_group_id: 334,
        moreInfoLabel: "categories.become_a_sponsor",
    },

    premium: {
        ticketgroups: [334],
        disabledBuying: true,
        wrapperProps: {
            label: "categories.sponsorship.title"
        },


        register: {

            wrapperProps: {
                label : "virtual.prospect.title",
                secondaryLabel: "virtual.prospect.description"
            },

            baseLabel: "virtual.register",
            legend: "virtual.prospect.legend",

            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "phone", required: true}
            ],

            start : false,
            ticket_id : 1899,
            role: "",
            email_template : null,
            right : null,
            report: "hello@ecommerceberlin.com"
        },

    },
   

    streaming : {
        regform: "streaming_user.register",
        api: "https://proxy.eventjuicer.com/api/schedule",
        discordProps: {
            avatars: false,
            join: "https://discord.gg/VZW66eUGC9",
            title: "streaming.chat.title",
            description: "streaming.chat.description",
            showTime: false
        },
        playerProps: {
            controls: true, 
            playing: true, 
            light: false,
            loop: true,
            width: "100%",
            height: "100%"
        },
        stages: {
            A: {
                embed: "player",
                url: "https://www.youtu.be/Jdk6d4jroxI",
                discord: null,
                restricted: true,
                sponsors: [122008, 122030],
                //sponsors: [122041, 122029],
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"

            },
            B: {
                embed: "player",
                url: "https://youtu.be/IrPNGxmkHGA",
                discord: null,
                restricted: true,
                sponsors: [122043, 121981],
                 //sponsors: [122032, 121989],
                placeholder: "https://res.cloudinary.com/eventjuicer/image/upload/v1616511215/tehonline_fpeventcover_start.png"
            }
        }
    },


    streaming_user : {
        
        register: {

            wrapperProps: {
                label : "virtual.register.title",
                secondaryLabel: "virtual.register.description"
            },

            baseLabel: "virtual.register",
            legend: "virtual.register.legend",

            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
            //   {name: "nip", required: false},
              {name: "phone", required: true}
            ],

            start : ['email', 'fname'],
            ticket_id : 1897,
            email_template : "virtual-viewer-registration",
            right : "https://res.cloudinary.com/eventjuicer/image/upload/c_fit,h_700,w_700,f_auto/v1615550856/virtualebe_reg.jpg",
            rightShadowed: true

        },

        benefits : {

            label: "viewer.benefits.title",
            //secondaryLabel: "visitors.benefits.title",
            baseLabel: "visitors.benefits",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
    
            ]
        }, 

        default_ticket_id : 1897,
        default_email_template : "ecommerceberlin-visitor-registration",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
    },

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznan, Jana Matejki 52/4',
        organizer_regno : 'VAT ID 7792439665',
        event_name : 'E-commerce Berlin Virtual Edition',
        event_location : '',
        event_date : '26-27th May 2021',
        event_hours : '',

    },


    schedule_teaser : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1621248321/schedule-teaser.png',
          label: 'virtual.schedule_teaser',
          width: '100%',
          target : "/schedule"
        },
        ]
    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://res.cloudinary.com/eventjuicer/image/upload/w_768,c_fit,f_auto/v1579000835/exhibit.jpg',
          label: 'virtual.looking_for_expo',
          width: '100%',
          target : "https://ecommerceberlin.com"
        },
        ]
    },

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Lucas',
                position : 'Business Development Manager',
                langs : ["de"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386301/ecommerceberlin_support_lz.jpg',
                phone: '+49 157 7254 7327',
                email: 'lucas@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Peter',
                position : 'Project Manager',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386405/ecommerceberlin_support_psz.jpg',
                phone: '+49 302 555 98 75',
                email: 'peter@ecommerceberlin.com',
                chatlio : true
            }
          ]
    },

    schedule : {
        categories: {
            logistics: {color: "#000000", backgroundColor: "#96ADC8"},
            expansion: {color: "#000000", backgroundColor: "#D7FFAB"},
            marketing: {color: "#000000", backgroundColor: "#FCFF6C"},
            conversion: {color: "#000000", backgroundColor: "#D89D6A"},
            new_devs: {color: "#FFFFFF", backgroundColor: "#6D454C"},
            it_cloud: {color: "#FFFFFF", backgroundColor: "#81667A"},
            omnichannel: {color: "#FFFFFF", backgroundColor: "#EE6352"},
            covid: {color: "#000000", backgroundColor: "#F79D84"},
        },
        times : {
            '8:59': 'block',
            '9:00': 'presentation',
            '9:40': 'presentation',
            '10:20': 'presentation',
            '10:59': 'block',
            '11:00': 'presentation',
            '11:40': 'presentation',
            '12:20': 'presentation',
            '13:00': 'presentation'
          },
          venues : {
            A: { company_id: 0 },
            B: { company_id: 0 }
          },
        //   minimized : ["A", "C"],
          venueStyle : "gold",
    },

    footer : {
        showable: ["date"],
        primaryStyle: null,
        secondaryStyle: null,
        iconStyle : "black",
        links : [
            {label: "common.pages.imprint", href : "/legal/imprint"},
            {label: "visitors.agreement.title", href : "/legal/visitors"},
            {label: "exhibitors.agreement.title", href : "/legal/exhibitors"},
            {label: "common.pages.cookies", href : "/legal/cookies"},
            {label: "visitors.data-agreement.title", href: "/legal/visitors-data"}
        ]
    },

    appbar : {
        links: [
            {label: "REGISTER", color: "secondary",  href: "/register", variant: "contained"}
        ],
    },

    cfpphotostream : {

        wrapperProps: {
            label : "cfp.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824810/Website/CFP%20-%20gallery/Conference2_MyTheresa.jpg", cols: 6},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference6_Facebook_Lisa.jpg", cols: 6},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824722/Website/CFP%20-%20gallery/IMG_0782_copy.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824720/Website/CFP%20-%20gallery/IMG_0643.jpg", cols: 4},
            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824718/Website/CFP%20-%20gallery/Conference7_IBM_Isabelle.jpg", cols: 4},

            {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824707/Website/CFP%20-%20gallery/IMG_9984.jpg", cols: 6},
          //  {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824699/Website/CFP%20-%20gallery/2SH07600.jpg", cols: 3},
          {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824808/Website/CFP%20-%20gallery/Conference4_Nivea.jpg", cols: 6},
     

            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824698/Website/CFP%20-%20gallery/Conference10_Douglas.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/2SH09325.jpg", cols: 6},
            // {src: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1597824685/Website/CFP%20-%20gallery/Conference5_BabySweets.jpg", cols: 4}

        ]
    },


};


export default settings














