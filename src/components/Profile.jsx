const Profile = () => {
    return (
      <div className="content">
      <div
        className="content-bg"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/07/06/19/26/drops-6392473_960_720.jpg')",
        }}
      ></div>
      <div className="content-info">
        <div className="content-profile">
          <div
            className="content-avatar"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg')",
            }}
          ></div>
          <div className="content-profile-info">
            <div className="content-profile__name">
              Name
            </div>
            <div className="content-profile__lastname">
              Last NAme
            </div>
          </div>
        </div>
        <div className="content-posts">
          <h3 className="content-posts__title">
            My Posts
          </h3>
          <div className="content-posts__new"> 
            New Post
          </div>
          <div className="content-posts__wrapper">
            <div>POst 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Profile;