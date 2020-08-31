// Schema
// {
//     linkto: {}: RouterLink,
//     posttitle: String,
//     date: String,
//     mdfilename: String,
//     brief: String,
// }

const ROUTER_NAME = 'post'

export const posts = [
    {
        linkto: { 
            name: ROUTER_NAME,
            params: { 
                urlname: 'wildcard-subdomains',
                mdfilename: 'wildcard.md'
            }
        },
        title: 'Wildcard subdomains on digitalocean using Express and Nginx with Let\'s Encrypt for SSL.',
        date: '29 Aug 2020',
        brief: 'A quick explanation of the steps I took to get wildcard subdomains working for welcomeqr.codes',
    },
    {
        linkto: { 
            name: ROUTER_NAME,
            params: { 
                urlname: 'tips-for-new-players',
                mdfilename: 'tipsfornewplayers.md'
            }
        },
        title: 'Tips For New VueJs Players',
        date: '29 Aug 2020',
        brief: 'Some common mistakes I observe from juniors devs and how to correct them, primarily focused on VueJs applications.',
    },
    {
        linkto: { 
            name: ROUTER_NAME,
            params: { 
                urlname: 'style-organisation-in-chaotic-places',
                mdfilename: 'betterstyles.md',
            }
        },
        title: 'Organising Style Out Of Chaos',
        date: '9 May 2020',
        brief: 'How I organise style hierarchy in the ever changing world of SPA\'s SFC and NPM packages.',
    },
]
