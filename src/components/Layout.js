import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import 'lazysizes';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';

let lazyEventHandled = false;

function MetaDescription(description) {
    if (!description)
      return null;
    return <meta name="Description" content={description} />;
}

export default function Body(props) {
    const metaDescription = _.get(props, 'pageContext.frontmatter.seo.description');

    if (!lazyEventHandled) {
        if (typeof window !== 'undefined') {
            document.addEventListener('lazybeforeunveil', function(e){
                var bg = e.target.getAttribute('data-bg');
                if(bg){
                    e.target.style.backgroundImage = 'url(' + bg + ')';
                }
            });
        }
        lazyEventHandled = true;
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{_.get(props, 'pageContext.frontmatter.title') && _.get(props, 'pageContext.frontmatter.title') + ' - '}{_.get(props, 'pageContext.site.siteMetadata.title')}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="google" content="notranslate" />
                {MetaDescription(metaDescription)}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" crossorigin /> */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" />
                {/* <link rel="preload" href={safePrefix('assets/css/main.css')} as="stylesheet" /> */}
                <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                <link rel="shortcut icon" href={_.get(props, 'pageContext.site.siteMetadata.favicon')} type="image/x-icon" />
                <link rel="icon" href={_.get(props, 'pageContext.site.siteMetadata.favicon')} type="image/x-icon" />
            </Helmet>
            <div id="page" className={'site palette-' + _.get(props, 'pageContext.site.siteMetadata.palette')}>
                <Header {...props} />
                <main id="content" className="site-content">
                    {props.children}
                </main>
                <Footer {...props} />
            </div>
        </React.Fragment>
    );
}
