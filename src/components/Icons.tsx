import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
     <svg {...props} viewBox="0 0 512 512" width="1500" height="1200">
      <g>
        {/* House Outline */}
        <path
          d="M256 50L50 256h80v160h100V306h52v110h100V256h80L256 50z"
          fill="#60a5fa" opacity="1"></path>
        
        {/* Inner House Door */}
        <rect x="230" y="306" width="52" height="110" fill="#222222" opacity="1"></rect>
        
        {/* Windows */}
        <rect x="140" y="180" width="60" height="60" fill="#558ce7" opacity="1"></rect>
        <rect x="310" y="180" width="60" height="60" fill="#558ce7" opacity="1"></rect>
        
        {/* Roof */}
        <path
          d="M256 20L40 236h432L256 20z"
          fill="#87befb" opacity="1"></path>
        
        {/* Text "Braveupstudios" */}
        <text x="256" y="500" fontSize="130" fontWeight="bold" fill="#222222" textAnchor="middle">
          Braveups
        </text>
      </g>
    </svg>
  ),
};