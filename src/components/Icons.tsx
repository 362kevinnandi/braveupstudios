import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 512 512'>
  <g fill="none" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer walls */}
        <rect x="64" y="64" width="384" height="384" rx="16" ry="16" fill="#dbeafe" opacity="1"></rect>
        
        {/* Room separators */}
        <line x1="192" y1="64" x2="192" y2="448" stroke="#60a5fa"></line>
        <line x1="320" y1="64" x2="320" y2="448" stroke="#60a5fa"></line>
        <line x1="64" y1="192" x2="448" y2="192" stroke="#60a5fa"></line>
        <line x1="64" y1="320" x2="448" y2="320" stroke="#60a5fa"></line>

        {/* Doors */}
        <path d="M192 128 h40" stroke="#222222"></path>
        <path d="M320 384 h40" stroke="#222222"></path>
        
        {/* Windows */}
        <rect x="96" y="224" width="64" height="32" fill="#87befb" opacity="1"></rect>
        <rect x="352" y="224" width="64" height="32" fill="#87befb" opacity="1"></rect>
        <rect x="224" y="96" width="32" height="64" fill="#87befb" opacity="1"></rect>
        <rect x="224" y="352" width="32" height="64" fill="#87befb" opacity="1"></rect>

        {/* Stairs */}
        <path d="M384 96 v40 h40" stroke="#558ce7"></path>
        <path d="M384 176 v40 h40" stroke="#558ce7"></path>
      </g>
</svg>

  ),
}