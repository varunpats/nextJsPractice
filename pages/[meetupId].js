import MeetupDetail from '../components/meetups/MeetupDetail';

function MetupDetails() {
    return <MeetupDetail
        id='m1'
        title='First meetup'
        image='https://www.walklondon.com/london-walks/walk-london-images/pool-of-london/city-hall-1250.jpg'
        address='Some address 5, 12345 some city'
        description='Our first meetup'
    />
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'First meetup',
                image: 'https://www.walklondon.com/london-walks/walk-london-images/pool-of-london/city-hall-1250.jpg',
                address: 'Some address 5, 12345 some city',
                description: 'Our first meetup'
            }
        }
    }
}

export default MetupDetails;