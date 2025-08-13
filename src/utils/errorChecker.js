/**
 * Error Checker Utility for KodxMedia Project
 * This utility helps identify and fix common Next.js and React errors
 */

// Common error patterns to check for
export const ERROR_PATTERNS = {
    // Image component errors
    IMAGE_FILL_WITHOUT_POSITION: {
        pattern: /fill.*className.*object-contain/,
        message: "Image with 'fill' prop needs parent with relative positioning and explicit height",
        fix: "Add 'relative' class and explicit height to parent container"
    },

    // Missing alt attributes
    MISSING_ALT: {
        pattern: /<Image[^>]*src=[^>]*>/,
        message: "Image components should have alt attributes for accessibility",
        fix: "Add alt attribute to Image component"
    },

    // Missing key props
    MISSING_KEY: {
        pattern: /\.map\([^)]*\)\s*=>\s*<[^>]*>/,
        message: "Array map functions should have key props",
        fix: "Add unique key prop to mapped elements"
    },

    // Console errors
    CONSOLE_ERROR: {
        pattern: /console\.(error|warn)/,
        message: "Remove console.error and console.warn from production code",
        fix: "Replace with proper error handling or remove"
    }
};

// Performance optimization checks
export const PERFORMANCE_CHECKS = {
    // Missing memoization
    MISSING_MEMO: {
        pattern: /export default function/,
        message: "Consider using React.memo for performance optimization",
        fix: "Wrap component with React.memo"
    },

    // Missing useCallback
    MISSING_USE_CALLBACK: {
        pattern: /const.*=.*\(\)\s*=>/,
        message: "Consider using useCallback for function definitions in components",
        fix: "Wrap function with useCallback"
    },

    // Missing useMemo
    MISSING_USE_MEMO: {
        pattern: /const.*=.*\[.*\]\./,
        message: "Consider using useMemo for expensive computations",
        fix: "Wrap computation with useMemo"
    }
};

// Accessibility checks
export const ACCESSIBILITY_CHECKS = {
    // Missing ARIA labels
    MISSING_ARIA: {
        pattern: /<button[^>]*>/,
        message: "Buttons should have aria-label or aria-labelledby",
        fix: "Add appropriate ARIA attributes"
    },

    // Missing semantic HTML
    MISSING_SEMANTIC: {
        pattern: /<div[^>]*role="button"/,
        message: "Use semantic HTML elements instead of div with role",
        fix: "Replace div with button element"
    }
};

/**
 * Check for common errors in a file
 * @param {string} content - File content to check
 * @param {string} filename - Name of the file being checked
 * @returns {Array} Array of found issues
 */
export function checkFileForErrors(content, filename) {
    const issues = [];

    // Check for image fill errors
    if (content.includes('fill') && content.includes('Image')) {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            if (line.includes('fill') && line.includes('Image')) {
                // Check if parent has proper positioning
                const hasRelative = content.includes('relative') || content.includes('absolute');
                const hasHeight = content.includes('h-[') || content.includes('height:');

                if (!hasRelative || !hasHeight) {
                    issues.push({
                        type: 'ERROR',
                        line: index + 1,
                        message: ERROR_PATTERNS.IMAGE_FILL_WITHOUT_POSITION.message,
                        fix: ERROR_PATTERNS.IMAGE_FILL_WITHOUT_POSITION.fix,
                        filename
                    });
                }
            }
        });
    }

    // Check for missing alt attributes
    const imageMatches = content.match(/<Image[^>]*>/g);
    if (imageMatches) {
        imageMatches.forEach((match, index) => {
            if (!match.includes('alt=')) {
                issues.push({
                    type: 'WARNING',
                    message: ERROR_PATTERNS.MISSING_ALT.message,
                    fix: ERROR_PATTERNS.MISSING_ALT.fix,
                    filename
                });
            }
        });
    }

    // Check for missing keys in map functions
    const mapMatches = content.match(/\.map\([^)]*\)\s*=>\s*<[^>]*>/g);
    if (mapMatches) {
        mapMatches.forEach((match, index) => {
            if (!match.includes('key=')) {
                issues.push({
                    type: 'WARNING',
                    message: ERROR_PATTERNS.MISSING_KEY.message,
                    fix: ERROR_PATTERNS.MISSING_KEY.fix,
                    filename
                });
            }
        });
    }

    return issues;
}

/**
 * Generate a summary report of all issues
 * @param {Array} allIssues - Array of all found issues
 * @returns {Object} Summary report
 */
export function generateReport(allIssues) {
    const summary = {
        total: allIssues.length,
        errors: allIssues.filter(issue => issue.type === 'ERROR').length,
        warnings: allIssues.filter(issue => issue.type === 'WARNING').length,
        files: [...new Set(allIssues.map(issue => issue.filename))],
        byType: {}
    };

    allIssues.forEach(issue => {
        if (!summary.byType[issue.message]) {
            summary.byType[issue.message] = 0;
        }
        summary.byType[issue.message]++;
    });

    return summary;
}

/**
 * Get recommended fixes for common issues
 * @returns {Object} Recommended fixes
 */
export function getRecommendedFixes() {
    return {
        imageFill: {
            description: "Fix Image component with fill prop",
            solution: `
        // Before
        <div className="w-16 h-16">
          <Image src="/icon.png" fill className="object-contain" />
        </div>
        
        // After
        <div className="relative w-16 h-16">
          <Image src="/icon.png" fill className="object-contain" />
        </div>
      `
        },
        missingAlt: {
            description: "Add alt attribute to Image components",
            solution: `
        // Before
        <Image src="/image.png" width={100} height={100} />
        
        // After
        <Image src="/image.png" alt="Description" width={100} height={100} />
      `
        },
        missingKey: {
            description: "Add key prop to mapped elements",
            solution: `
        // Before
        {items.map(item => <div>{item.name}</div>)}
        
        // After
        {items.map((item, index) => <div key={item.id || index}>{item.name}</div>)}
      `
        },
        performance: {
            description: "Optimize component performance",
            solution: `
        // Before
        export default function MyComponent() { ... }
        
        // After
        const MyComponent = memo(function MyComponent() { ... })
        export default MyComponent
      `
        }
    };
}

export default {
    checkFileForErrors,
    generateReport,
    getRecommendedFixes,
    ERROR_PATTERNS,
    PERFORMANCE_CHECKS,
    ACCESSIBILITY_CHECKS
};
