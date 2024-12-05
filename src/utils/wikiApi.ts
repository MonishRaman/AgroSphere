export async function fetchWikiSummary(term: string): Promise<string> {
  const baseUrl = 'https://en.wikipedia.org/w/api.php';
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'extracts',
    exintro: 'true',
    explaintext: 'true',
    titles: term,
    origin: '*'
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    const data = await response.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId].extract || 'No information found.';
  } catch (error) {
    console.error('Error fetching from Wikipedia:', error);
    return 'Unable to fetch information at this time.';
  }
}