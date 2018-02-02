import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/hope/fb1.png'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
  {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "Hope When It Hurts - Women’s Event",
    "startDate": "2018-05-10T09:30",
    "location": {
      "@type": "Place",
      "name": "Hamilton Road Baptist Church",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "112 Hamilton Rd",
        "addressLocality": "Bangor",
        "postalCode": "BT20 4LQ",
        "addressCountry": "UK"
      }
    },
    image,
    "description": "Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts.",
  }
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts."
              />
              <title>Hope When It Hurts - Women’s Event | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/hope-when-it-hurts/" />
              <meta property="og:title" content="Hope When It Hurts - Women’s Event | Story Bangor" />
              <meta property="og:description" content="Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Hope When It Hurts - Women’s Event | Story Bangor" />
              <meta name="twitter:description" content="Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Hope When It Hurts - Women’s Event</h2>
    <h3>Thursday - 9:30am - Hamilton Road Baptist Church</h3>

<p>Women of all ages and stages are invited to Hamilton Road Baptist Church to enjoy coffee and treats, and hear how one woman found great hope in the midst of experiencing some of life's deep hurts.</p>
  </div>
);

export default () => <Main currentPageNum={4} article={<Article />} pageMeta={<PageMeta />} />;
