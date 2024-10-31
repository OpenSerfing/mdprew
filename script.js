const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');

// Update preview in real-time
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const html = marked(markdownText);  // Using marked.js to convert Markdown to HTML
    markdownPreview.innerHTML = html;
});
