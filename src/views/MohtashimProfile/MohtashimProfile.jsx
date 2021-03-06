import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import team4 from "assets/img/faces/Mohtashim-Waheed.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class MohtashimProfile extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Hulul.Pro"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={team4} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Mohtashim Waheed</h3>
                      <h6>FRONTEND DEVELOPER</h6>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://twitter.com/WaheedMohtashim"
                        target="_blank"
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://instagram.com/"
                        target="_blank"
                      >
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://www.facebook.com/moutashim.waheed?ref=bookmarks"
                        target="_blank"
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                    <div className={classes.description}>
                      <p>
                        I am a frontend developer with 1 years experience. I
                        have worked in ReactJs. who loves to bring brilliant
                        ideas to life, I love challenges and I try to ﬁnd them
                        everywhere, learning is my habit and I’m always hungry
                        for it. I build teams, brainstorm on ideas and execute
                        them, I like doing things in an artsy way.
                      </p>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

MohtashimProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(MohtashimProfile);
