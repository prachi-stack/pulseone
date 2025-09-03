import "./footer.css"
import {
  Building2,
  Users,
  Heart,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  BarChart3,
  Stethoscope,
  CreditCard,
  FileText,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  Link,
  Compass,
  ShieldCheck,
  Network,
  Zap,
  DollarSign,
  Sparkles,
  X
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo */}
          <div>
            <div className="footer-brand">

              <span className="logo-text">PulseOne</span>
            </div>
            <p className="footer-description">
              Transforming healthcare access through innovative technology and seamless connectivity.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-section-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">HIPAA Compliance</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-section-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2025 PulseOne - Product of Zeencare. All rights reserved.</p> <a href="https://www.mousencheese.design" target="_blank" rel="noopener noreferrer" className="footer-copyright">
            Designed By Mouse & Cheese Design Studio
          </a>


        </div>
      </div>
    </footer>
  )
}

export default Footer
