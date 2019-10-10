import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import SimpleExpansionPanel from "components/SimpleExpansionPanel/SimpleExpansionPanel.jsx";
import { Link } from "react-router-dom";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import TeamMember from "./TeamMember.jsx";
import { members } from "assets/data";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";



class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (

      <div className={classes.section}>
          <h2 className={classes.title}>Here are our teams</h2>
          <SimpleExpansionPanel
              heading="Management Team"
              defaultExpanded={true}
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Management Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Islamic Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Islamic Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />

          <SimpleExpansionPanel
          heading="Backend Development Team"
          content={
        <div>
          <GridContainer>
            {members.map((member, index) => {
                if(member.team=="Backend Team")
              return (
                  <TeamMember
                      member_name={member.member_name}
                      slug={member.slug}
                      image_file={member.image_file}
                      member_title={member.member_title}
                      member_summary={member.member_summary}
                      experience={member.experience}
                      team={member.team}
                  />
              );
            })}
          </GridContainer>
        </div>
          }
          />
          <SimpleExpansionPanel
              heading="Frontend Development Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Frontend Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Mobile Development Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Mobile Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />

          <SimpleExpansionPanel
              heading="Fullstack Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Fullstack Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="CMS ECommerce ERP Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="CMS ECommerce ERP Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />

          <SimpleExpansionPanel
              heading="Design Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Design Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Video Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Video Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Marketing Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Marketing Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Devops Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Devops Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Business Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Business Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Consultancy Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Consultancy Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Software Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Software Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="Support Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="Support Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />

                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
          <SimpleExpansionPanel
              heading="AI Team"
              content={
                  <div>
                      <GridContainer>
                          {members.map((member, index) => {
                              if(member.team=="AI Team")
                                  return (
                                      <TeamMember
                                          member_name={member.member_name}
                                          slug={member.slug}
                                          image_file={member.image_file}
                                          member_title={member.member_title}
                                          member_summary={member.member_summary}
                                          experience={member.experience}
                                          team={member.team}
                                      />
                                  );
                          })}
                      </GridContainer>
                  </div>
              }
          />
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
