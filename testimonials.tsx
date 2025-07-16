import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Testimonials() {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">What People Are Saying</h1>
        <blockquote className="italic mb-6">"TAP took our vision and made it bigger — we gained a global audience overnight."</blockquote>
        <blockquote className="italic mb-6">"Professional, creative, and real. The TAP team knows how to get the job done."</blockquote>
        <blockquote className="italic">"Best decision we made for our launch — the content was cinematic."</blockquote>
      </main>
      <Footer />
    </div>
  )
}