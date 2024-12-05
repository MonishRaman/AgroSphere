import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Upload, Loader2, AlertCircle } from 'lucide-react';
import { PageBackground } from '../components/PageBackground';
import { backgrounds } from '../utils/backgroundImages';
import { SoilAnalysisResult } from '../components/SoilAnalysisResult';
import { analyzeSoilReport } from '../utils/soilAnalysis';

export const YieldAnalysis: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [report, setReport] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleReportUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsAnalyzing(true);
      setError(null);
      const reader = new FileReader();
      
      reader.onload = async () => {
        const reportText = reader.result as string;
        setReport(file.name);
        
        try {
          const result = await analyzeSoilReport(reportText, type || 'general');
          setAnalysisResult(result);
          setError(null);
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Failed to analyze report');
          setAnalysisResult(null);
        } finally {
          setIsAnalyzing(false);
        }
      };

      reader.onerror = () => {
        setError('Failed to read file. Please try again.');
        setIsAnalyzing(false);
      };

      reader.readAsText(file);
    }
  };

  return (
    <PageBackground image={backgrounds.yieldAnalysis}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-green-800 mb-6">Yield Analysis</h1>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-red-700">{error}</span>
              </div>
            )}
            
            {!analysisResult && (
              <div className="mb-8">
                <label className="block text-center p-8 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:border-green-500">
                  <Upload className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <span className="text-gray-600">Upload soil test report</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleReportUpload}
                    className="hidden"
                    disabled={isAnalyzing}
                  />
                </label>
              </div>
            )}

            {isAnalyzing && (
              <div className="flex items-center justify-center space-x-3 text-green-600">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Analyzing report...</span>
              </div>
            )}

            {analysisResult && (
              <SoilAnalysisResult
                parameters={analysisResult.parameters}
                recommendations={analysisResult.recommendations}
                wikiSummary={analysisResult.wikiSummary}
              />
            )}

            {analysisResult && (
              <button
                onClick={() => {
                  setAnalysisResult(null);
                  setReport(null);
                  setError(null);
                }}
                className="mt-6 px-4 py-2 text-green-600 hover:text-green-700 font-medium"
              >
                Analyze Another Report
              </button>
            )}
          </div>
        </div>
      </div>
    </PageBackground>
  );
};