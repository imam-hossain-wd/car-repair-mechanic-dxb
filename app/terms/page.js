import TermsPage from '@/pages/TermsPage/TermsPage'
import { siteMetadata } from '@/seo/siteMetadata/siteMetadata'
import React from 'react'


// export const metadata = {
//   title: siteMetadata.terms.title ,
//   description: siteMetadata.terms.description,
//   alternates: {
//     canonical: siteMetadata.terms.canonical,
//   },
// }

export const metadata = siteMetadata.terms;

export default function Terms() {
    return <TermsPage />
}
