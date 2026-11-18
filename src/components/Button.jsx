function Button(props) {
    return (
        <button
          type="button"
          className={`profile-button ${props.type}`}
          onClick={props.onClick}
          >
            {props.children}
          </button>
    )
}
export default Button;