import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
      <div className="profile">
        <div className={classes.info}>
          <div
            className={classes.avatar}
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_960_720.jpg')",
            }}
          ></div>
          <div className="data">
            <div className="name">Name: <span className="nameValue">Anton</span></div>
            <div className="lastname">Last Name: <span className="lastnameValue">Iarovoi</span></div>
          </div>
        </div>
      </div>
  );
};

export default ProfileInfo;
