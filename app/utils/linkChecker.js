// Link checking utility for SEO optimization

export function checkInternalLinks(content) {
  const internalLinkRegex = /href=["'](\/[^"']*)["']/g;
  const links = [];
  let match;

  while ((match = internalLinkRegex.exec(content)) !== null) {
    links.push({
      url: match[1],
      type: 'internal',
      fullMatch: match[0]
    });
  }

  return links;
}

export function checkExternalLinks(content) {
  const externalLinkRegex = /href=["'](https?:\/\/[^"']*)["']/g;
  const links = [];
  let match;

  while ((match = externalLinkRegex.exec(content)) !== null) {
    links.push({
      url: match[1],
      type: 'external',
      fullMatch: match[0]
    });
  }

  return links;
}

export function validateInternalLink(link) {
  // Common valid internal link patterns
  const validPatterns = [
    /^\/$/, // Home page
    /^\/[a-z-]+\/$/, // Simple pages like /contact/
    /^\/find-clinic\/[a-z-]+\/[a-z-]+\/$/, // Clinic pages
    /^\/patient-support\/[a-z-]+\/$/, // Patient support pages
    /^\/[a-z-]+\/[a-z-]+\/$/, // Two-level pages
  ];

  return validPatterns.some(pattern => pattern.test(link));
}

export function getBrokenLinks(content) {
  const internalLinks = checkInternalLinks(content);
  const externalLinks = checkExternalLinks(content);
  const brokenLinks = [];

  // Check internal links
  internalLinks.forEach(link => {
    if (!validateInternalLink(link.url)) {
      brokenLinks.push({
        ...link,
        issue: 'Invalid internal link pattern',
        severity: 'high'
      });
    }
  });

  // Check for common broken link patterns
  const brokenPatterns = [
    /\/undefined\//,
    /\/null\//,
    /\/#/,
    /javascript:void\(0\)/,
    /mailto:$/,
    /tel:$/,
  ];

  [...internalLinks, ...externalLinks].forEach(link => {
    brokenPatterns.forEach(pattern => {
      if (pattern.test(link.url)) {
        brokenLinks.push({
          ...link,
          issue: 'Broken link pattern detected',
          severity: 'high'
        });
      }
    });
  });

  return brokenLinks;
}

export function generateLinkReport(content) {
  const internalLinks = checkInternalLinks(content);
  const externalLinks = checkExternalLinks(content);
  const brokenLinks = getBrokenLinks(content);

  return {
    totalLinks: internalLinks.length + externalLinks.length,
    internalLinks: internalLinks.length,
    externalLinks: externalLinks.length,
    brokenLinks: brokenLinks.length,
    brokenLinksList: brokenLinks,
    recommendations: generateLinkRecommendations(brokenLinks)
  };
}

function generateLinkRecommendations(brokenLinks) {
  const recommendations = [];

  if (brokenLinks.length === 0) {
    recommendations.push('✅ No broken links detected');
    return recommendations;
  }

  const highSeverity = brokenLinks.filter(link => link.severity === 'high');
  const mediumSeverity = brokenLinks.filter(link => link.severity === 'medium');

  if (highSeverity.length > 0) {
    recommendations.push(`🔴 Fix ${highSeverity.length} high-severity broken links`);
  }

  if (mediumSeverity.length > 0) {
    recommendations.push(`🟡 Review ${mediumSeverity.length} medium-severity links`);
  }

  recommendations.push('💡 Consider implementing automated link checking in CI/CD');
  recommendations.push('💡 Add 404 error handling for better user experience');

  return recommendations;
}
