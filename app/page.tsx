import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import HeroSplit from '@/components/blocks/hero-split'
import ServicesGrid from '@/components/blocks/services-grid'
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after'
import ReviewsCarousel from '@/components/blocks/reviews-carousel'
import FooterColumns from '@/components/blocks/footer-columns'

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'Premium landscaping, paving, decking, and garden design across South-West Sydney. Trusted by homeowners and builders for over 15 years.',
}

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/gallery', label: 'Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Premium Landscaping for South-West Sydney Homeowners"
        imageAlt="Premium landscaping transformation in South-West Sydney"
        trustBadge="Trusted by 500+ South-West Sydney homeowners"
        subheadline="Transform your outdoor space with 15+ years of expert landscaping, design, and construction across Campbelltown, Camden, Narellan, Picton, and beyond."
      />
      <ServicesGrid
        items={[
          'Paving — Durable, stylish paved areas for driveways, paths, and entertaining spaces',
          'Turf Installation — Lush, level lawns installed with premium turf varieties',
          'Decking — Custom timber and composite decking designed for your lifestyle',
          'Retaining Walls — Structural and decorative retaining walls built to engineer-approved standards',
          'Garden Design — Bespoke garden layouts that blend beauty with low-maintenance practicality',
          'Garden Maintenance — Ongoing care programs to keep your outdoor space looking its best year-round',
        ]}
        heading="Complete Outdoor Transformation Services"
        subheading="From concept to completion, we deliver tailored landscaping solutions built to last — crafted with quality materials and meticulous attention to detail."
      />
      <GalleryBeforeAfter
        pairs={[
          '/images/before-after-1-before.jpg|/images/before-after-1-after.jpg|Backyard landscaping transformation',
          '/images/before-after-2-before.jpg|/images/before-after-2-after.jpg|Paving installation before and after',
          '/images/before-after-3-before.jpg|/images/before-after-3-after.jpg|Turf and garden design transformation',
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse real before-and-after transformations across South-West Sydney — paving, decking, retaining walls, turf, and more."
      />
      <ReviewsCarousel
        items={[
          'Harris Landscaping transformed our backyard completely — professional, punctual, and the quality is outstanding. Highly recommend! — Sarah M., Campbelltown',
          'From the first quote to the final walkthrough, the team was fantastic. Our new paving and decking look incredible. — James T., Camden',
          "We've used Harris Landscaping twice now. Reliable, honest, and the results always exceed our expectations. — Lisa K., Narellan",
          'The retaining wall they built has completely changed how we use our sloped yard. Great communication throughout. — Mark B., Picton',
        ]}
        heading="What Our Clients Are Saying"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, decking, and garden design across South-West Sydney. Trusted by homeowners and builders for over 15 years."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            links: [
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#turf', label: 'Turf Installation' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#garden-design', label: 'Garden Design' },
              { href: '/services#maintenance', label: 'Garden Maintenance' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/ingleburn', label: 'Ingleburn' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
            ],
            heading: 'Service Areas',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/gallery', label: 'Project Gallery' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/contact', label: 'Get a Free Quote' },
            ],
            heading: 'Company',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  )
}
