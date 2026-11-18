import Button from "./Button.jsx";

function ProfileCard(props) {
    return(
        <div className="profile-card">
            <img
              className="profile-avatar"
              src={props.avatar}
              alt={props.name}
              />

              <h2>{props.name}</h2>
              <p>{props.description}</p>

              <Button
                type={props.type}
                onClick={() =>alert(`Hello ${props.name}!`)} >
                    View Profile
              </Button>
        </div>
    )
}
export default ProfileCard;