/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Link as LinkIcon, Web, Apps, Smartphone, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Frontend"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Web}
          dropdownList={[
              <Link to="/react" className={classes.dropdownLink}>React</Link>,
              <Link to="/angular" className={classes.dropdownLink}>Angular</Link>,
              <Link to="/vue" className={classes.dropdownLink}>Vue</Link>
          ]}
        />
      </ListItem>
        <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Backend"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/python" className={classes.dropdownLink}>Python [Django,Flask]</Link>,
            <Link to="/node" className={classes.dropdownLink}>Node [Express,Fastify]</Link>,
            <Link to="/php" className={classes.dropdownLink}>Php [Laravel,CodeIgniter,Cakephp]</Link>
          ]}
        />
      </ListItem>
        <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Mobile"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Smartphone}
          dropdownList={[
              <Link to="/react-native" className={classes.dropdownLink}>React Native</Link>,
              <Link to="/android" className={classes.dropdownLink}>Android</Link>,
              <Link to="/ios" className={classes.dropdownLink}>Ios</Link>
          ]}
        />
      </ListItem>
        <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={LinkIcon}
          dropdownList={[
            <a
              href="https://www.upwork.com/agencies/~017d1a3623a20d64f1"
              target="_blank"
              className={classes.dropdownLink}
            >
              Upwork Agency Profile
            </a>,
              <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classes.navLink}
              >
                  <CloudDownload className={classes.icons} /> Download Company Profile
              </Button>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
