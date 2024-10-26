import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
     <svg {...props} viewBox="0 0 2048 2048" width="2048" height="2048">
      <g>
        {/* House outline */}
        <rect x="400" y="600" width="1200" height="800" fill="#60a5fa" />
        {/* Roof */}
        <polygon points="300,600 1024,200 1748,600" fill="#558ce7" />
        {/* Door */}
        <rect x="920" y="1100" width="200" height="300" fill="#222222" />
        {/* Windows */}
        <rect x="500" y="700" width="200" height="200" fill="#87befb" />
        <rect x="1348" y="700" width="200" height="200" fill="#87befb" />
        {/* Chimney */}
        <rect x="1400" y="340" width="100" height="200" fill="#222222" />
        {/* Door knob */}
        <circle cx="1090" cy="1250" r="14" fill="#558ce7" />
      </g>
    </svg>
  ),
};
