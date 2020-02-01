import React from 'react';
import _ from 'lodash';

import { safePrefix, markdownify, Link } from '../utils';

export default class SectionHero extends React.Component {
  render() {
    const heroImage = safePrefix(_.get(this.props, 'section.image.800w'));
    const heroImageMobile = safePrefix(_.get(this.props, 'section.image.480w'));
    const heroImageSrcSet = `${heroImageMobile} 480w, ${heroImage} 800w`;
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block hero-block bg-accent outer">
        <div className="inner">
          <div className="grid">
            {_.get(this.props, 'section.image') &&
              <div className="cell block-preview">
                <img
                  data-srcset={heroImageSrcSet}
                  data-sizes="(max-width: 600px) 480px, 800px"
                  data-src={heroImage}
                  alt={_.get(this.props, 'section.title')}
                  className="lazyload"
                />
              </div>
            }
            <div className="cell block-content">
              {_.get(this.props, 'section.title') &&
                <h2 className="block-title underline">{_.get(this.props, 'section.title')}</h2>
              }
              <div className="block-copy">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') &&
                <p className="block-buttons">
                  {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                    <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button white large">{_.get(action, 'label')}</Link>
                  ))}
                </p>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
