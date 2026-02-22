// Detect path prefix (blog pages use "../", root pages use "")
var prefix = document.querySelector('link[rel="stylesheet"]').getAttribute('href').replace('styles/tarski.css', '');

// Build sidebar
(function buildSidebar() {
    var sidebar = document.getElementById('secondary');
    if (!sidebar) return;

    var html =
        '<h3>Links</h3>' +
        '<ul>' +
        '<li><a href="https://x.com/_sathvikr">Twitter</a></li>' +
        '<li><a href="https://github.com/sathvikr">GitHub</a></li>' +
        '<li><a href="https://www.linkedin.com/in/sathvik-redrouthu-28456919b/">LinkedIn</a></li>' +
        '<li><a href="mailto:sredrout@caltech.edu">Email</a></li>' +
        '</ul>' +
        '<h3>Archives</h3>' +
        '<ul>';

    for (var i = 0; i < POSTS.length; i++) {
        html += '<li><a href="' + prefix + 'blog/' + POSTS[i].file + '.html">' + POSTS[i].title + '</a></li>';
    }

    html += '</ul>';
    sidebar.innerHTML = html;
})();

// On index page, fetch and display all posts
(function buildIndex() {
    var container = document.getElementById('posts-listing');
    if (!container) return;

    POSTS.forEach(function(post) {
        var url = 'blog/' + post.file + '.html';

        fetch(url)
            .then(function(r) { return r.text(); })
            .then(function(html) {
                var doc = new DOMParser().parseFromString(html, 'text/html');
                var content = doc.querySelector('.post-content');
                if (!content) return;

                var article = document.createElement('div');
                article.className = 'post';
                article.innerHTML =
                    '<h2 class="post-title"><a href="' + url + '">' + post.title + '</a></h2>' +
                    '<div class="post-meta">' + post.date + '</div>' +
                    '<div class="post-content">' + content.innerHTML + '</div>';
                container.appendChild(article);

                // Run any post-specific init (e.g., ARC visualizations)
                if (article.querySelector('.arc-example') && typeof initArcViz === 'function') {
                    initArcViz();
                }
            })
            .catch(function(err) {
                // Fallback: show as a link
                var article = document.createElement('div');
                article.className = 'post';
                article.innerHTML =
                    '<h2 class="post-title"><a href="' + url + '">' + post.title + '</a></h2>' +
                    '<div class="post-meta">' + post.date + '</div>';
                container.appendChild(article);
            });
    });
})();

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();
