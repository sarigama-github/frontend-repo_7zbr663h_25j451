import { Code2, Smartphone, Gamepad2, Boxes, PenTool, Video, Megaphone, Layout } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Design & Development',
    points: [
      'Modern, responsive website design',
      'Custom business & portfolio websites',
      'E-commerce store development',
      'Fast, secure, and SEO-optimized sites',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    points: [
      'Android & iOS app development',
      'User-friendly UI/UX',
      'Smooth performance & clean coding',
      'Custom features based on business needs',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    points: [
      'Unity & Unreal Engine game development',
      '2D & 3D games',
      'Environment design',
      'Game mechanics, UI, and character design',
    ],
  },
  {
    icon: Boxes,
    title: 'Software Development',
    points: [
      'Desktop and cloud-based software',
      'Business automation tools',
      'Custom management systems (POS, CRM, ERP)',
      'Secure and scalable solutions',
    ],
  },
  {
    icon: PenTool,
    title: 'Graphic Design & Branding',
    points: [
      'Logo & brand identity design',
      'Social media posts & banners',
      'Business cards, flyers, brochures',
      'Professional branding kits',
    ],
  },
  {
    icon: Video,
    title: 'Video Editing & Motion Graphics',
    points: [
      'Promo & advertisement videos',
      'YouTube video editing',
      'Cinematic motion graphics',
      'Animated intros & outros',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    points: [
      'Social media management',
      'Facebook & Instagram ad campaigns',
      'SEO services',
      'Content strategy & brand promotion',
    ],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    points: [
      'Wireframes & mockups',
      'Website & app UI/UX',
      'User journey optimization',
      'Clean, modern interface design',
    ],
  },
  {
    icon: Boxes,
    title: 'E-commerce Solutions',
    points: [
      'Online store setup',
      'Payment gateway integration',
      'Product management system',
      'Mobile-friendly store design',
    ],
  },
]

export default function Services(){
  return (
    <section id="services" className="relative py-20 bg-[#07070A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[48rem] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-600 to-sky-600" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="mt-2 text-white/70">Jarvis Studio – end-to-end solutions crafted for your business.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, points}) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition overflow-hidden">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-purple-600/30 to-sky-600/30 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-white/5 ring-1 ring-white/10">
                  <Icon className="text-purple-300" size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {points.map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-sky-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
