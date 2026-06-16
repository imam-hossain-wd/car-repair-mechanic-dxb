import BlogPage from '@/pages/BlogPage/BlogPage'
import React from 'react'

export const metadata = {
  title: "Car Repair Blog | Expert Tips & Maintenance Guides | Dubai",
  description: "Latest car maintenance tips, repair guides, and automotive insights from Dubai's leading mobile mechanics. Learn how to keep your car in perfect condition.",
  keywords: "car repair blog, car maintenance tips, dubai auto blog, car care guide, vehicle maintenance",
  alternates: {
    canonical: "https://carrepairmechanic.ae/dubai/blog",
  },
};

export default function blog() {
    return <BlogPage />
}