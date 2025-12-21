'use client';

interface USAMapProps {
  onStateClick: (stateName: string) => void;
  selectedState: string | null;
}

const stateAbbreviations: Record<string, string> = {
  'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR',
  'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE',
  'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID',
  'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS',
  'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
  'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS',
  'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV',
  'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY',
  'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK',
  'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
  'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT',
  'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV',
  'Wisconsin': 'WI', 'Wyoming': 'WY'
};

export default function USAMap({ onStateClick, selectedState }: USAMapProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
        {Object.entries(stateAbbreviations).map(([name, abbr]) => (
          <button
            key={abbr}
            onClick={() => onStateClick(name)}
            className={`
              aspect-square rounded-lg border-2 font-bold text-sm transition-all
              ${selectedState === name
                ? 'border-blue-500 bg-blue-100 text-blue-700 shadow-md scale-105'
                : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'
              }
            `}
            title={name}
          >
            {abbr}
          </button>
        ))}
      </div>
    </div>
  );
}
