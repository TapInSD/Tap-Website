import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="px-6 py-20 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Let’s Work</h1>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Your Message" className="p-3 border rounded" rows="5"></textarea>
          <button type="submit" className="bg-purple-700 hover:bg-purple-900 text-white py-3 px-6 rounded font-bold">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}