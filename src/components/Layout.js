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

const loadDynamicScript = ({url, id, callback, defer = false, async = false}) => {
    const existingScript = document.getElementById('scriptId');
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = url;
      script.id = id;
      script.async = async;
      script.defer = defer;
      document.body.appendChild(script);
  
      script.onload = () => {
        if (callback) callback();
      };
    }
  
    if (existingScript && callback) callback();
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

    setTimeout(() => loadDynamicScript({
        url: '//js.hs-scripts.com/7089893.js',
        id: 'hs-script-loader',
        async: true,
        defer: true
    }), 5000);

    return (
        <React.Fragment>
            <Helmet>
                <title>{_.get(props, 'pageContext.frontmatter.title') && _.get(props, 'pageContext.frontmatter.title') + ' - '}{_.get(props, 'pageContext.site.siteMetadata.title')}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="google" content="notranslate" />
                {MetaDescription(metaDescription)}
                <link rel="preload" href={safePrefix('assets/css/main.css')} as="stylesheet" />
                <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                <link rel="preconnect" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i&display=swap" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i&display=swap" />
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
