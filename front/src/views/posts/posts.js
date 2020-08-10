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
    // {
    //     linkto: { 
    //         name: ROUTER_NAME,
    //         params: { 
    //             urlname: 'hue',
    //             mdfilename: 'hue.md'
    //         }
    //     },
    //     title: 'Project write up: Hue',
    //     date: '15 Jun 2020',
    //     brief: 'Managing styles in chaotic Vue codebases Learnings on managing styles in chaotic Vue codebases',
    // },
    {
        linkto: { 
            name: ROUTER_NAME,
            params: { 
                urlname: 'tips-for-new-players',
                mdfilename: 'tipsfornewplayers.md'
            }
        },
        title: 'Tips For New PLayers',
        date: '15 Jun 2020',
        brief: 'Things I see Vue juniors doing and how to correct them.',
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
        date: '15 Jun 2020',
        brief: 'Learnings on managing styles in chaotic Vue codebases',
    },
    // {
    //     linkto: { 
    //         name: ROUTER_NAME,
    //         params: { 
    //             urlname: 'lorem-ipsum',
    //             mdfilename: 'lorem.md',
    //         }
    //     },
    //     title: 'Lorem Ipsum Markdown',
    //     date: '15 Jun 2020',
    //     brief: 'Styling template',
    // },
    // {
    //     linkto: { 
    //         name: ROUTER_NAME,
    //         params: { 
    //             urlname: 'lorem-ipsum-2',
    //             mdfilename: 'lorem2.md',
    //         }
    //     },
    //     title: 'Lorem Ipsum Markdown Longer version',
    //     date: '15 Jun 2020',
    //     brief: 'Another Styling template',
    // },
    // {
    //     linkto: { 
    //         name: ROUTER_NAME,
    //         params: { 
    //             urlname: 'reacty-act-17-dans-thing',
    //             mdfilename: 'dan.md',
    //         }
    //     },
    //     title: 'More stolen content from the intwerwebs',
    //     date: '15 Jun 2020',
    //     brief: 'During my time on the React team, I’ve been lucky to see how [Jordan](https://twitter.com/jordwalke), [Sebastian](https://twitter.com/sebmarkbage), [Sophie](https://twitter.com/sophiebits) and other tenured team members approach problems. In this post',
    // },
    // {
    //     linkto: { 
    //         name: ROUTER_NAME,
    //         params: { 
    //             urlname: 'so-desperate-for-ghost-points',
    //             mdfilename: 'vuecheat.md',
    //         }
    //     },
    //     title: 'A dude wants them internets fames',
    //     date: '15 Jun 2020',
    //     brief: 'Why would you event care, isnt it obvious that this sort of thing wont really work, man?',
    // },
]
