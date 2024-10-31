function markdownToHtml(markdown) {
    // Заменяем заголовки
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Заменяем жирный текст
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Заменяем абзацы
    markdown = markdown.replace(/\n\n/g, '<p></p>'); // два перевода строки
    markdown = markdown.replace(/\n/g, '<br>'); // один перевод строки

    return markdown.trim();
}

document.addEventListener("DOMContentLoaded", function() {
    const markdownInput = document.getElementById("markdown-input");
    const htmlOutput = document.getElementById("html-output");

    markdownInput.addEventListener("input", function() {
        const markdownText = markdownInput.value;
        htmlOutput.innerHTML = markdownToHtml(markdownText);
    });
});