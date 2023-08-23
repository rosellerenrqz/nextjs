import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    //meetups is what it is passed in the home page
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
