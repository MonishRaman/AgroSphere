import { fetchWikiSummary } from './wikiApi';

interface SoilParameters {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organic: number;
}

interface AnalysisResult {
  parameters: SoilParameters;
  recommendations: string[];
  wikiSummary?: string;
}

export async function analyzeSoilReport(reportText: string, farmingType: string): Promise<AnalysisResult> {
  try {
    // Parse soil parameters from report text
    const parameters = parseSoilParameters(reportText);
    
    // Generate recommendations based on parameters and farming type
    const recommendations = generateRecommendations(parameters, farmingType);
    
    // Fetch relevant Wikipedia information
    const wikiSummary = await fetchWikiSummary(`${farmingType} farming soil requirements`);
    
    return {
      parameters,
      recommendations,
      wikiSummary
    };
  } catch (error) {
    console.error('Soil analysis error:', error);
    throw new Error('Failed to analyze soil report. Please try again.');
  }
}

function parseSoilParameters(reportText: string): SoilParameters {
  try {
    // In a real application, this would use more sophisticated parsing
    // For demo purposes, we'll return sample values
    return {
      ph: 6.8,
      nitrogen: 45,
      phosphorus: 15,
      potassium: 80,
      organic: 2.5
    };
  } catch (error) {
    throw new Error('Failed to parse soil parameters from report');
  }
}

function generateRecommendations(params: SoilParameters, farmingType: string): string[] {
  const recommendations: string[] = [];

  // pH recommendations
  if (params.ph < 6.0) {
    recommendations.push('Add agricultural lime to increase soil pH');
  } else if (params.ph > 7.5) {
    recommendations.push('Add sulfur to decrease soil pH');
  }

  // Nitrogen recommendations
  if (params.nitrogen < 40) {
    recommendations.push('Apply nitrogen-rich fertilizers like urea or ammonium nitrate');
  }

  // Phosphorus recommendations
  if (params.phosphorus < 20) {
    recommendations.push('Add phosphate fertilizers or bone meal');
  }

  // Potassium recommendations
  if (params.potassium < 60) {
    recommendations.push('Apply potash or wood ash to increase potassium levels');
  }

  // Organic matter recommendations
  if (params.organic < 3) {
    recommendations.push('Add compost or organic matter to improve soil structure');
  }

  // Farming type specific recommendations
  switch (farmingType.toLowerCase()) {
    case 'organic':
      recommendations.push('Use natural composting and crop rotation');
      break;
    case 'intensive':
      recommendations.push('Consider precision farming techniques for optimal nutrient management');
      break;
    case 'subsistence':
      recommendations.push('Implement intercropping to maximize soil nutrients');
      break;
    case 'commercial':
      recommendations.push('Implement precision agriculture techniques for optimal resource utilization');
      break;
    case 'plantation':
      recommendations.push('Consider cover cropping between plantation rows');
      break;
    case 'mixed':
      recommendations.push('Rotate crops and livestock grazing areas for optimal soil health');
      break;
    default:
      recommendations.push('Consider soil testing every growing season');
  }

  return recommendations;
}