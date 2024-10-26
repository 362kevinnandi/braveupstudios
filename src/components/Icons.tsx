import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 512 512'>
  <g>
    {/* Main house structure */}
      <rect x="100" y="80" width="312" height="312" fill="#60a5fa" opacity="1" />

      {/* Roof */}
      <polygon points="256,40 80,120 432,120" fill="#558ce7" opacity="1" />

      {/* Rooms */}
      <rect x="130" y="130" width="100" height="100" fill="#87befb" opacity="1" />
      <rect x="282" y="130" width="100" height="100" fill="#87befb" opacity="1" />
      <rect x="130" y="260" width="100" height="100" fill="#87befb" opacity="1" />
      <rect x="282" y="260" width="100" height="100" fill="#87befb" opacity="1" />

      {/* Doors */}
      <rect x="230" y="180" width="20" height="50" fill="#222222" opacity="1" />
      <rect x="230" y="310" width="20" height="50" fill="#222222" opacity="1" />
      
      {/* Windows */}
      <circle cx="180" cy="180" r="10" fill="#558ce7" opacity="1" />
      <circle cx="332" cy="180" r="10" fill="#558ce7" opacity="1" />
      <circle cx="180" cy="310" r="10" fill="#558ce7" opacity="1" />
      <circle cx="332" cy="310" r="10" fill="#558ce7" opacity="1" />
  </g>
</svg>

  ),
}