import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 1024 1024" width="1024" height="1024">
      <g>
        {/* House outline */}
        <rect x="200" y="300" width="600" height="400" fill="#60a5fa" />
        {/* Roof */}
        <polygon points="150,300 512,100 874,300" fill="#558ce7" />
        {/* Door */}
        <rect x="460" y="550" width="100" height="150" fill="#222222" />
        {/* Windows */}
        <rect x="250" y="350" width="100" height="100" fill="#87befb" />
        <rect x="674" y="350" width="100" height="100" fill="#87befb" />
        {/* Chimney */}
        <rect x="700" y="170" width="50" height="100" fill="#222222" />
        {/* Door knob */}
        <circle cx="545" cy="625" r="7" fill="#558ce7" />
      </g>
    </svg>
  ),
};
