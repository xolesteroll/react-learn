import classes from "./Banner.module.css";

const Banner = () => {
    return (
      <div
        className={classes.banner}
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/07/06/19/26/drops-6392473_960_720.jpg')",
        }}
      ></div>
    );
}

export default Banner;