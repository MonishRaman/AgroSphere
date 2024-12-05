import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  parameters: {
    ph: number;
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    organic: number;
  };
  recommendations: string[];
  wikiSummary?: string;
}

export const SoilAnalysisResult: React.FC<Props> = ({
  parameters,
  recommendations,
  wikiSummary
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Soil Parameters</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">pH Level</div>
            <div className="text-lg font-semibold text-green-800">{parameters.ph}</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Nitrogen (N)</div>
            <div className="text-lg font-semibold text-green-800">{parameters.nitrogen} mg/kg</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Phosphorus (P)</div>
            <div className="text-lg font-semibold text-green-800">{parameters.phosphorus} mg/kg</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Potassium (K)</div>
            <div className="text-lg font-semibold text-green-800">{parameters.potassium} mg/kg</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Organic Matter</div>
            <div className="text-lg font-semibold text-green-800">{parameters.organic}%</div>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Recommendations</h3>
        <ul className="space-y-3">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {wikiSummary && (
        <div className="bg-white/90 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Additional Information</h3>
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{wikiSummary}</p>
          </div>
        </div>
      )}
    </div>
  );
};