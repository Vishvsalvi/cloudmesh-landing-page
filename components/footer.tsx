"use client";

// import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const footerLinks = [
  //   {
  //     title: "Product",
  //     links: [
  //       { name: "Features", href: "#features" },
  //       { name: "Pricing", href: "#pricing" },
  //       { name: "Documentation", href: "#" },
  //     ]
  //   },
  //   {
  //     title: "Company",
  //     links: [
  //       { name: "About", href: "#" },
  //       { name: "Blog", href: "#" },
  //       { name: "Careers", href: "#" },
  //     ]
  //   },
  //   {
  //     title: "Support",
  //     links: [
  //       { name: "Help Center", href: "#" },
  //       { name: "Contact", href: "#contact" },
  //       { name: "Status", href: "#" },
  //     ]
  //   }
  // ];

  // const socialLinks = [
  //   { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  //   { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  //   { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  //   { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  // ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-screen-lg px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-xl font-bold text-foreground">
                CloudMesh
              </span>
            </div>
            <p className="text-sm text-foreground/60 max-w-xs">
              {
                "Unify your cloud storage experience. Access all your files from\
              one place, no matter where they're stored."
              }
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {currentYear} CloudMesh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-foreground/60">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              {/* <a
                href="#"
                className="hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </a> */}
              {/* <a
                href="#"
                className="hover:text-foreground transition-colors duration-200"
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
