import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            { /* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Open Graph tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'Farhod Soyilov - Software Engineer',
    description: 'Portfolio of Farhod Soyilov, a Software Engineer specializing in building scalable web applications.',
    name: 'Farhod Soyilov',
    type: 'website'
};
