export interface ProjectImage {
  /** Path under public/, e.g. /projects/ethiopia-mela-sme-1.jpg */
  src?: string;
  alt: string;
  /** Shown on placeholder until you add the image */
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  liveUrl?: string;
  /** Custom label for the live link button */
  liveLinkLabel?: string;
  githubUrl?: string;
  /** Custom label for the GitHub link button */
  githubLinkLabel?: string;
  images: ProjectImage[];
}

/**
 * Project screenshots — add 2 images per project to public/projects/
 *
 * Naming: {project-id}-1.jpg and {project-id}-2.jpg
 * (png or webp work too — update the src path below)
 */
export const projects: Project[] = [
  {
    id: "warm",
    title: "WARM",
    category: "Client Work",
    description:
      "Client project for WARM (World Airplay Radio Monitor) — a live platform with 40,000+ users that tracks radio airplay worldwide in real time. Artists and labels use it to see where songs play and act on live spin data.",
    challenge:
      "Music teams need a reliable web dashboard to surface real-time airplay data, geographic insights, and reports for a large user base without slowing down as more songs and stations are monitored.",
    solution:
      "Contributed as a full-stack developer on client work through Upwork: built and maintained dashboard features with Angular and React on the frontend, Node.js APIs on the backend, and MongoDB for data storage.",
    outcome:
      "Live production app serving 40,000+ users — artists, labels, and promoters track global radio airplay with real-time data, reporting tools, and a stable sign-in experience.",
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    liveUrl: "https://dashboard.warmmusic.net/en-US/signin",
    liveLinkLabel: "Live app · 40k+ users",
    images: [
      {
        src: "/warm.png",
        alt: "WARM sign-in page with dashboard preview",
        label: "Sign in",
      },
      {
        src: "/warm1.png",
        alt: "WARM My Songs dashboard with track list and analytics",
        label: "My songs dashboard",
      },
    ],
  },
  {
    id: "ethiopia-mela-sme",
    title: "Ethiopia Mela SME",
    category: "Full Stack",
    description:
      "A business management app built for Ethiopian SMEs — sales, inventory, staff, reports, and settings in one place. Each business gets its own data, and the app keeps working when the internet drops.",
    challenge:
      "Small shops in Ethiopia often lose connectivity, run with several staff roles, and need one system for sales and stock without mixing up data between businesses.",
    solution:
      "React + TypeScript frontend with offline sync via IndexedDB, Node.js/Express/MongoDB backend, JWT cookie auth, and role-based access for owners, managers, and cashiers.",
    outcome:
      "Production-ready platform with 400+ tests, Docker deployment, full sales and inventory workflows, and demo logins for each staff role.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    liveUrl: "https://ethiopia-mela-sme.vercel.app/",
    images: [
      {
        src: "/mela-shop.png",
        alt: "Mela SME landing page with offline sales and inventory features for Ethiopian shops",
        label: "Landing page",
      },
      {
        src: "/mela-shop1.png",
        alt: "Mela SME admin dashboard with sales, inventory, and business metrics",
        label: "Admin dashboard",
      },
    ],
  },
  {
    id: "akora-b2b",
    title: "AkoraMart — B2B Vendor Ordering Platform",
    category: "Full Stack",
    description:
      "AkoraMart is a B2B marketplace for Ethiopian suppliers and vendors — browse featured products by category, place bulk orders with MOQ rules, and manage listings from a verified supplier dashboard.",
    challenge:
      "B2B ordering in Ethiopia needs a public storefront for discovery, separate experiences for admins, suppliers, and vendors, and reliable handling of minimum order quantities and multi-supplier orders priced in ETB.",
    solution:
      "Next.js storefront with category filters, search, and product cards. Supplier portal with verified accounts, approval stats, and catalog tools. FastAPI backend, Supabase for data and file storage, JWT auth, cart/checkout APIs, supplier approval flow, and order notifications.",
    outcome:
      "Working marketplace across clothing, electronics, and shoes with ETB pricing and MOQ on listings, plus a supplier dashboard for product management, orders, inventory, and quotes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://akora-b2-b-vendor-ordering-platform.vercel.app/",
    images: [
      {
        src: "/ethio-mela.png",
        alt: "AkoraMart storefront with popular products, categories, and search",
        label: "Marketplace storefront",
      },
      {
        src: "/mela-supplier.png",
        alt: "AkoraMart supplier dashboard with product catalog and approval stats",
        label: "Supplier dashboard",
      },
    ],
  },
  {
    id: "hotel-management",
    title: "HotelPro — Hotel Management System",
    category: "Full Stack",
    description:
      "HotelPro is a property management system for hotels — bookings, guests, rooms, payments, housekeeping, and reports. Built so owners and staff can run daily operations from one app.",
    challenge:
      "Hotels need room availability, check-ins, payments, and cleaning schedules in one system, with different screens and permissions for owners, managers, staff, and housekeeping.",
    solution:
      "React/Vite frontend with Zustand state, Flask/SQLAlchemy backend, and JWT auth. Role-specific views for owners, managers, staff, and housekeeping teams.",
    outcome:
      "Full PMS with a live dashboard, booking engine, guest profiles, invoicing, housekeeping scheduling, and occupancy reports.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "JWT",
    ],
    images: [
      {
        src: "/hotel-manag.png",
        alt: "InnFlow hotel management landing page with bookings, guests, and operations overview",
        label: "Landing page",
      },
      {
        src: "/hotel-man1.png",
        alt: "InnFlow owner dashboard with occupancy, revenue, arrivals, and room status",
        label: "Owner dashboard",
      },
    ],
  },
  {
    id: "db-sql",
    title: "E Commerce Web App",
    category: "Full Stack",
    description:
      "DB-SQL is an Ethiopian fashion e-commerce site for dresses and shoes. Customers browse and buy, vendors manage their own products, and admins oversee the platform.",
    challenge:
      "Three user types (buyer, vendor, admin), product image uploads, and checkout flows that must stay consistent even when something fails mid-order.",
    solution:
      "React frontend with Tailwind CSS, Express + MySQL backend, JWT auth with role guards, Docker for deployment, and GitHub Actions for CI.",
    outcome:
      "Working e-commerce platform with product search, cart, checkout, order tracking, vendor product management, and admin oversight tools.",
    technologies: [
      "React",
      "Express",
      "MySQL",
      "JWT",
      "Tailwind CSS",
      "Docker",
      "RBAC",
    ],
    githubUrl: "https://github.com/aka8338/DB-SQL",
    githubLinkLabel: "GitHub · private repo",
    images: [
      {
        src: "/e-commerce.jpg",
        alt: "E-commerce web app storefront",
        label: "Storefront",
      },
    ],
  },
  {
    id: "mango-disease-identifier",
    title: "Mango Disease Identifier",
    category: "Mobile",
    description:
      "A mobile app built for Ethiopian farmers to identify mango diseases from photos. Farmers capture or upload an image of a leaf or fruit, and a machine learning model classifies the disease so they can act early before it spreads across the crop.",
    challenge:
      "Many farmers lack quick access to agronomy experts. They need a simple on-phone tool that works in the field, accepts camera photos, and returns a clear disease label without a long setup or technical steps.",
    solution:
      "Expo and React Native app with Tailwind-style UI for capture, preview, and results screens. Images are sent to a Python Flask API that runs the trained ML model and returns the classification with a readable label for the farmer.",
    outcome:
      "End-to-end disease identification flow from photo to prediction, aimed at Ethiopian mango growers. Codebase on GitHub (private repo — sign in to view if you have access).",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Flask",
      "Machine Learning",
      "REST APIs",
    ],
    githubUrl: "https://github.com/aka8338/React_Native",
    githubLinkLabel: "GitHub · private repo",
    images: [
      {
        src: "/mango-1.png",
        alt: "Mango Disease Identifier app home screen for Ethiopian farmers",
        label: "Home screen",
      },
      {
        src: "/mango2.png",
        alt: "Mango Disease Identifier showing disease classification result",
        label: "Classification result",
      },
    ],
  },
];
