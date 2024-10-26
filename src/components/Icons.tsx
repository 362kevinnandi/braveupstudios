import { LucideProps } from 'lucide-react'

export const HousePlanIcons = {
  housePlan: (props:LucideProps) => (
    <svg {...props} viewBox="0 0 500 500">
      <g>
        {/* House Outline */}
        <rect x="50" y="50" width="400" height="400" fill="#d9e3f0" stroke="#333" strokeWidth="4" />
        
        {/* Rooms */}
        <rect x="70" y="70" width="160" height="160" fill="#b3cde0" stroke="#333" strokeWidth="2" />
        <text x="150" y="150" textAnchor="middle" fill="#333" fontSize="14">Living Room</text>

        <rect x="250" y="70" width="160" height="160" fill="#b3cde0" stroke="#333" strokeWidth="2" />
        <text x="330" y="150" textAnchor="middle" fill="#333" fontSize="14">Kitchen</text>

        <rect x="70" y="250" width="160" height="160" fill="#b3cde0" stroke="#333" strokeWidth="2" />
        <text x="150" y="330" textAnchor="middle" fill="#333" fontSize="14">Bedroom</text>

        <rect x="250" y="250" width="160" height="160" fill="#b3cde0" stroke="#333" strokeWidth="2" />
        <text x="330" y="330" textAnchor="middle" fill="#333" fontSize="14">Bathroom</text>

        {/* Doors */}
        <rect x="230" y="160" width="20" height="40" fill="#888" />
        <rect x="230" y="340" width="20" height="40" fill="#888" />
        
        {/* Windows */}
        <rect x="90" y="210" width="40" height="10" fill="#60a5fa" />
        <rect x="370" y="210" width="40" height="10" fill="#60a5fa" />
        <rect x="210" y="90" width="10" height="40" fill="#60a5fa" />
        <rect x="210" y="370" width="10" height="40" fill="#60a5fa" />
      </g>
    </svg>
  )
};
