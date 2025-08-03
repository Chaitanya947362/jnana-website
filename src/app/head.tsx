// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Jñāna Education — Empowering Global Learners</title>
      <meta
        name="description"
        content="Jñāna Education helps students and professionals unlock global opportunities through study-abroad consulting, skill-building, and career mentoring."
      />
      <meta
        name="keywords"
        content="Jñāna, education, study abroad, career counseling, student visa, global learning, IELTS, Germany, UK, Canada"
      />
      <meta name="author" content="Jñāna Education" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Jñāna Education — Empowering Global Learners" />
      <meta
        property="og:description"
        content="Unlock your global potential with personalized guidance, study abroad support, and career mentoring from Jñāna."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jñāna Education — Empowering Global Learners" />
      <meta
        name="twitter:description"
        content="Personalized global education and career guidance. Study abroad, build skills, and grow with Jñāna Education."
      />
      <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
    </>
  );
}
