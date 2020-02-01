import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

import { Layout } from '../components/index';
import { safePrefix, htmlToReact } from '../utils';

import Column from '../components/process/Column';
import Img from '../components/process/Img';
import requirementImg from '../../static/images/requirement.webp';
import questionnaireImg from '../../static/images/questionnaire.webp';
import proposalImg from '../../static/images/proposal.webp';
import implementationImg from '../../static/images/implementation.webp';
import celebrationImg from '../../static/images/celebration.webp';

/**
 * TODO: Move all the hard coding out in the md file of hireus.
 */
export default class Page extends React.Component {
  render() {
    const email = _.get(this.props, 'pageContext.frontmatter.email_contact');
    const phone = _.get(this.props, 'pageContext.frontmatter.contact_number');

    const postImage = safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path.800w'));
    const postImageMobile = safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path.480w'));
    const postImageSrcSet = `${postImageMobile} 480w, ${postImage} 800w`;

    return (
      <Layout {...this.props}> 
        <div className="outer">
          <div className="inner-medium">
            <article className="post post-full">
              <header className="post-header">
                <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              </header>
              <div className="row">
                <Column width="30%" float="left">
                  <Img data-bg={requirementImg} height="90%" width="90%" className="lazyload" />
                </Column>
                <Column width="50%" float="center">
                  <h4>Requirement Clarification</h4>
                  <div>First step will be to understand what you want. Contribute in the ideation if the 'hows' haven't been ironed out.</div>
                </Column>
                <Column width="20%" float="right" type="auxiliary">
                  <div className="step-text">1</div>
                </Column>
              </div>
              <div className="row green">
                <Column width="30%" float="right">
                  <Img data-bg={questionnaireImg} height="90%" width="90%" className="lazyload" />
                </Column>
                <Column width="50%" float="left" className="padl30">
                  <h4>The Questionnaire</h4>
                  <div>We build a solid understanding using documentation or our exploration. We might have some questions for you.</div>
                </Column>
                <Column width="20%" float="center" type="auxiliary">
                  <div className="step-text">2</div>
                </Column>
              </div>
              <div className="row">
                <Column width="30%" float="left">
                  <Img data-bg={proposalImg} className="lazyload" />
                </Column>
                <Column width="20%" float="center" type="auxiliary">
                  <div className="step-text-center">3</div>
                </Column>
                <Column width="50%" float="right">
                  <h4>The Proposal</h4>
                  <div>Our experts get together and present a proposal with implementation details and timelines.</div>
                </Column>
              </div>
              <div className="row green">
                <Column width="30%" float="right">
                  <Img data-bg={implementationImg} className="lazyload" />
                </Column>
                <Column width="50%" float="left" className="padl30">
                  <h4>The Implementation</h4>
                  <div>The team now gets going to fulfill your dream with panache and complete transparency.</div>
                </Column>
                <Column width="20%" float="center" type="auxiliary">
                  <div className="step-text">4</div>
                </Column>
              </div>
              <div className="row">
                <Column width="30%" float="left">
                  <Img data-bg={celebrationImg} height="90%" width="90%" className="lazyload" />
                </Column>
                <Column width="50%" float="center">
                  <h4>The Celebration</h4>
                  <div>Cheers to the achievement and many more to come. A quick retrospective shall help us improve.</div>
                </Column>
                <Column width="20%" float="right" type="auxiliary">
                  <div className="step-text">5</div>
                </Column>
              </div>
              <br />
              {_.get(this.props, 'pageContext.frontmatter.img_path') &&
                <div className="post-thumbnail">
                  <img
                    data-srcset={postImageSrcSet}
                    data-sizes="(max-width: 600px) 480px, 800px"
                    data-src={postImage}
                    alt={_.get(this.props, 'pageContext.frontmatter.title')}
                    className="lazyload"
                  />
                </div>
              }
              <br />
              <header className="post-header">
                <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.hire_us_title')}</h1>
              </header>
              <div className="post-content post-content-centered">
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
                <div>
                  <FontAwesomeIcon icon={faPaperPlane} />&nbsp;&nbsp;
                  <strong><a href={"mailto:" + email}>{email}</a></strong>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                  <strong><a href={"tel:" + phone}>{phone}</a></strong>
                </div>
                <br /><br /><br /><br />
                <div className="post-footnote">
                Thanks to <a href="https://www.freepik.com/search?page=1&sort=popular&type=vector">freepik</a> for the cool illustrations.
                </div>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
