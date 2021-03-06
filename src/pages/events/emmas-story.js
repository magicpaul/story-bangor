import React from 'react';
import Main from './components/_Main';
import { Helmet } from 'react-helmet';
import ShareImage from './img/emma/emma-fb.png'
import ResponsiveEmbed from 'react-responsive-embed'

const image =  "https://www.storybangor.com" + ShareImage;
const schema = [
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Emma’s Story - Anorexia Loses Its Grip",
  "startDate": "2018-05-09T20:00",
  "location": {
    "@type": "Place",
    "name": "Hamilton Road Presbyterian Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prospect Road",
      "addressLocality": "Bangor",
      "postalCode": "BT20 4LN",
      "addressCountry": "UK"
    }
  },
  image,
  "description": "Emma grew up in East Belfast. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen.",
  "performer": {
    "@type": "Person",
    "name": ["Emma Scrivener","Glen Scrivener"]
    }
}
]
const PageMeta = () => (
        <div className="SEO">

            <Helmet>
              <meta name="description" content="Emma grew up in East Belfast. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen."
              />
              <title>Emma’s Story - Anorexia Loses Its Grip | Story Bangor</title>
              />
              <meta property="og:url" content="https://www.storybangor.com/events/emmas-story/" />
              <meta property="og:title" content="Emma’s Story - Anorexia Loses Its Grip | Story Bangor" />
              <meta property="og:description" content="Emma grew up in East Belfast. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen." />
              <meta property="og:image" content={image} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />

              {/* Twitter Meta */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@storybangor" />
              <meta name="twitter:creator" content="@storybangor" />
              <meta name="twitter:title" content="Emma’s Story - Anorexia Loses Its Grip | Story Bangor" />
              <meta name="twitter:description" content="Emma grew up in East Belfast. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen." />
              <meta name="twitter:image" content={image} />
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            </Helmet>
        </div>
);

const Article = () => (
  <div>
    <h2>Emma’s Story - Anorexia Loses Its Grip</h2>
    <h3>Wednesday - 8pm - Hamilton Road Presbyterian Church</h3>
    <ResponsiveEmbed src="https://www.youtube.com/embed/5KAGnVYf2h8" allowFullScreen/>
<p className="padding-top">Come and hear Emma Scrivener’s deeply moving story and a talk from her husband Glen.</p>
<p>No ticket is required for this event</p>

<h3>The Storytellers</h3>

<h4>Emma Scrivener</h4>

<p>Emma grew up in East Belfast. Throughout her teenage years and into adulthood she battled with anorexia. The illness almost ended her life twice. Emma still lives with the long-term effects of anorexia, but her story is one of great hope against all odds. She studied at Oxford University and her writing has been described by Professor John Wyatt as ‘beautiful, shocking, searingly honest and inspiring.’ To find out more about Emma, check out her award-winning blog: <a href="http://www.emmascrivener.net/my-story">www.emmascrivener.net/my-story</a></p>

<h4>Glen Scrivener</h4>

<p>Originally from Australia, Glen has lived in the UK for more than half his life. He’s often found speaking at churches and universities, in the studio creating online media, or in his office writing. Glen is married to Emma, and they have a daughter, Ruby.</p>
<img src={ShareImage} alt="Emma" />
  </div>
);

export default () => <Main currentPageNum={3} article={<Article />} pageMeta={<PageMeta />} />;
