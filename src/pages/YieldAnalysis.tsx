import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export const YieldAnalysis: React.FC = () => {
  const [report, setReport] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleReportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReport(file.name);
        // Simulate analysis
        setTimeout(() => {
          setAnalysis(`Based on the soil test report:
          - pH Level: 6.8 (Optimal)
          - Nitrogen: Medium
          - Phosphorus: Low
          - Potassium: High
          
          Recommendations:
          1. Add phosphorus-rich fertilizers
          2. Maintain current irrigation practices
          3. Consider crop rotation next season`);
        }, 1500);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Yield Analysis</h1>
          
          <div className="mb-8">
            <label className="block text-center p-8 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:border-green-500">
              <Upload className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <span className="text-gray-600">Upload soil test report</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleReportUpload}
                className="hidden"
              />
            </label>
          </div>

          {report && (
            <div className="mb-4">
              <p className="text-green-600">Uploaded: {report}</p>
            </div>
          )}

          {analysis && (
            <div className="bg-green-50 p-6 rounded-lg whitespace-pre-line">
              <h2 className="text-xl font-semibold text-green-800 mb-2">Analysis Result</h2>
              <p className="text-gray-700">{analysis}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};