const articleListElement = document.getElementById('article-list');
const articleContentElement = document.getElementById('article-content');

// 文章目录
const articles = [
    { title: '文章 1', path: 'assets/blog/README.md' },
    { title: '文章 2', path: 'assets/blog/README.md' },
];

// 渲染文章目录
function renderArticleList() {
    articles.forEach((article) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const link = document.createElement('a');
        link.textContent = article.title;
        link.href = '#';
        link.className = 'text-decoration-none';
        link.addEventListener('click', () => loadArticle(article.path));
        li.appendChild(link);
        articleListElement.appendChild(li);
    });
}

// 加载文章内容
function loadArticle(path) {
    fetch(path)
        .then((response) => {
            if (!response.ok) {
                throw new Error('文章加载失败');
            }
            return response.text();
        })
        .then((markdown) => {
            const html = marked.parse(markdown);
            articleContentElement.innerHTML = html;
        })
        .catch((error) => {
            articleContentElement.innerHTML = `<p class="text-danger">${error.message}</p>`;
        });
}

// 初始化
renderArticleList();
