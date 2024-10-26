import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
      <svg {...props} viewBox="0 0 1600 1024" width="1600" height="1024">
      <g>
        {/* House outline */}
        <rect x="300" y="250" width="700" height="500" fill="#60a5fa" />
        {/* Roof */}
        <polygon points="250,250 650,50 1050,250" fill="#558ce7" />
        {/* Door */}
        <rect x="620" y="550" width="120" height="200" fill="#222222" />
        {/* Windows */}
        <rect x="400" y="350" width="130" height="130" fill="#87befb" />
        <rect x="870" y="350" width="130" height="130" fill="#87befb" />
        {/* Chimney */}
        <rect x="900" y="120" width="60" height="120" fill="#222222" />
        {/* Door knob */}
        <circle cx="725" cy="640" r="10" fill="#558ce7" />

        {/* Text "Braveups" */}
        <text x="1150" y="500" fontSize="1000" fontWeight="bold" fill="#222222">
          Braveups
        </text>
      </g>
    </svg>
  ),
};