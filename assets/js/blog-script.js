async function loadBlogPost(file) {
    try {
        const response = await fetch(file);
        const markdown = await response.text();

        // 确保 marked.js 已加载
        if (typeof marked !== 'function') {
            console.error('Marked.js is not loaded or improperly configured.');
            return;
        }

        const html = marked(markdown); // 转换 Markdown 为 HTML
        document.getElementById('blog-container').innerHTML = html;
    } catch (error) {
        console.error('Error loading blog post:', error);
    }
}

// 自动加载示例博客文章
loadBlogPost('assets/blog/README.md');
