/**
 * Utility to convert basic markdown (specifically double asterisks for bold) 
 * into HTML strings for use with dangerouslySetInnerHTML.
 */
export const formatSEOText = (text: string): string => {
    if (!text) return '';
    return text
        .split('\n')
        .join('<br />')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};
