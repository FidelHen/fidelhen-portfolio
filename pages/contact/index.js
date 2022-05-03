import React from 'react'
import Navigation from '@/components/navigation'
import Contact from '@/layouts/contact'
import Footer from '@/components/footer'
export default function ContactPage() {
    return (
        <div className='min-h-screen grid gap-4'>
            <Navigation />

            <Contact />
            <Footer />
        </div>
    )
}
