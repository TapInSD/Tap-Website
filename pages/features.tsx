import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Features() {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Why TAP?</h1>
        <p className="text-lg leading-relaxed">
          TAP is more than a service — it’s a movement. We’re built on purpose, storytelling, and cultural impact.
          With mobile flexibility, cutting-edge equipment, and a team that lives for innovation, TAP is your bridge from idea to execution.
        </p>
      </main>
      <Footer />
    </div>
  )
}