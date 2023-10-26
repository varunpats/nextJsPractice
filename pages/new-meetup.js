import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    const onSubmitForm = (data) => {
        console.log(data);
    }

    return <NewMeetupForm onAddMeetup={onSubmitForm} />
}

export default NewMeetupPage;