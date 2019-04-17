export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  select() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const user = this.props.user;
    return (
      <div
        onClick={() => this.select()}
        style={{
          margin: "10px",
          width: "100%",
          height: this.state.selected ? "auto" : "150px",
          backgroundColor: "#fff",
          borderRadius: ".25rem",
          boxShadow: "0 1px 0 rgba(0,0,0,.25)",
          border: "1px solid #ddd",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            height: "100px",
            marginBottom: this.state.selected ? "15px" : 0
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              border: "1px solid #ddd"
            }}
            src={user.profile.image_192}
          />
          <p style={{ fontSize: "19px" }}>{user.name}</p>
        </div>
        <div
          style={{
            display: this.state.selected ? "block" : "none",
            overflowX: "scroll"
          }}
        >
          <pre>
            <code className="language-JSON">
              {JSON.stringify(user, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
