import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 600 600" width="48" height="48">
      <g fill="none" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer walls */}
        <rect x="80" y="80" width="440" height="440" rx="20" ry="20" fill="#dbeafe" opacity="1"></rect>
        
        {/* Room separators */}
        <line x1="220" y1="80" x2="220" y2="520" stroke="#60a5fa"></line>
        <line x1="380" y1="80" x2="380" y2="520" stroke="#60a5fa"></line>
        <line x1="80" y1="220" x2="520" y2="220" stroke="#60a5fa"></line>
        <line x1="80" y1="380" x2="520" y2="380" stroke="#60a5fa"></line>

        {/* Doors */}
        <path d="M220 160 h50" stroke="#222222"></path>
        <path d="M380 440 h50" stroke="#222222"></path>
        
        {/* Windows */}
        <rect x="120" y="260" width="80" height="40" fill="#87befb" opacity="1"></rect>
        <rect x="400" y="260" width="80" height="40" fill="#87befb" opacity="1"></rect>
        <rect x="260" y="120" width="40" height="80" fill="#87befb" opacity="1"></rect>
        <rect x="260" y="400" width="40" height="80" fill="#87befb" opacity="1"></rect>

        {/* Stairs */}
        <path d="M460 120 v50 h50" stroke="#558ce7"></path>
        <path d="M460 200 v50 h50" stroke="#558ce7"></path>
        
        {/* Additional detailing */}
        <circle cx="300" cy="300" r="10" fill="#60a5fa"></circle> {/* Center point */}
      </g>
    </svg>

  ),
}