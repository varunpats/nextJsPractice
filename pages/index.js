import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://www.walklondon.com/london-walks/walk-london-images/pool-of-london/city-hall-1250.jpg',
        address: 'Some address 5, 12345 some city',
        description: 'Our first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://www.walklondon.com/london-walks/walk-london-images/pool-of-london/city-hall-1250.jpg',
        address: 'Some address 15, 13395 some city',
        description: 'Our second meetup'
    }
]

function HomePage(props) {
    return <MeetupList meetups={props.meetup} />
}

export async function getStaticProps() {
    return {
        props: {
            meetup: DUMMY_MEETUP
        }
    }
}

export default HomePage;