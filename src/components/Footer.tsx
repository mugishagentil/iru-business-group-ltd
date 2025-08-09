import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ChevronUp
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      "Healthcare Solutions",
      "Technology",
      "Photography",
      "Videography",
      "Digital Strategy"
    ],
    Company: [
      "Home",
      "About",
      "Projects",
      "Contact"
    ],
    Projects: [
      "Irucore",
      "Irucare",
      "Frame and Tune Studio",
      "Youtube",
      "Social Media"
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/IRUBUSINESSES?t=QHreTJ4D1GtZfix4tQIpyw&s=09   ", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/iru-business-group-571ba3334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/irubusinessgroup?igsh=Y2s1N25qY2xzM2Zu", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@irutv-2060", label: "Youtube" }
  ];

  return (
    <footer className="bg-[#1b1c20] border-t border-border">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                IRU BUSINESS GROUP
              </h3>
              <p className="text-[#ebedeb] leading-relaxed">
                Providing businesses across Rwanda and Africa with innovative solutions, strategic consulting, and cutting-edge technology to drive sustainable growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#ebedeb]">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span>+250 788 894 032</span>
              </div>
              <div className="flex items-center space-x-3 text-[#ebedeb]">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span>irubusinessgroup@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[#ebedeb]">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>Gahanga, Kicukiro, Kigali, Rwanda</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                             text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300
                             hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-yellow-500 mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#ebedeb] hover:text-yellow-500 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {year} IRU BUSINESS GROUP Ltd. All rights reserved.
              </p>
            </div>

            {/* Language Switcher & Back to Top */}
            <div className="flex items-center space-x-6">
              <select className="text-sm text-muted-foreground bg-transparent border-none outline-none">
                <option>English</option>
                <option>Kinyarwanda</option>
                <option>French</option>
              </select>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-white bg-yellow-700"
              >
                <ChevronUp className="h-5 w-5 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
