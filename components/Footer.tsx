export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-saffron flex items-center gap-2 mb-4">
            Pandharpur<span className="text-background text-base font-medium">Tourism</span>
          </a>
          <p className="text-background/70 max-w-sm leading-relaxed">
            Discover the spiritual essence of Maharashtra. Experience devotion, history, and culture on the banks of Chandrabhaga.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-background/70">
            <li><a href="#home" className="hover:text-saffron transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-saffron transition-colors">About</a></li>
            <li><a href="#gallery" className="hover:text-saffron transition-colors">Gallery</a></li>
            <li><a href="#places" className="hover:text-saffron transition-colors">Places</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-background/70">
            <li>info@pandharpurtourism.com</li>
            <li>+91 98765 43210</li>
            <li>Pandharpur, Maharashtra, India</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-background/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Pandharpur Tourism. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
