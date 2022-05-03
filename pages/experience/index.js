import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Metatags from '@/components/meta'
export default function Home() {
    return (
        <div className='grid gap-4'>
            <Metatags />
            <Navigation />
            <div className='min-h-screen'>

            </div>
            <Footer />
        </div>
    )
}
