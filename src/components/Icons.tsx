import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
      <svg {...props} viewBox="0 0 2400 1200" width="2400" height="1200">
      <g>
        {/* House outline */}
        <rect x="300" y="350" width="700" height="500" fill="#60a5fa" />
        {/* Roof */}
        <polygon points="250,350 650,150 1050,350" fill="#558ce7" />
        {/* Door */}
        <rect x="620" y="650" width="120" height="200" fill="#222222" />
        {/* Windows */}
        <rect x="400" y="450" width="130" height="130" fill="#87befb" />
        <rect x="870" y="450" width="130" height="130" fill="#87befb" />
        {/* Chimney */}
        <rect x="900" y="220" width="60" height="120" fill="#222222" />
        {/* Door knob */}
        <circle cx="725" cy="760" r="10" fill="#558ce7" />

        {/* Text "Braveups" */}
        <text x="1300" y="900" fontSize="200" fontWeight="bold" fill="#222222" stroke="#ffffff" strokeWidth="5" textAnchor="start">
          Braveups
        </text>
      </g>
    </svg>
  ),
};