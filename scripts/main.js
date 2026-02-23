// Detect path prefix (blog pages use "../", root pages use "")
var prefix = document.querySelector('link[rel="stylesheet"]').getAttribute('href').replace('styles/tarski.css', '');

function postMetaHTML(post) {
    var html = post.date;
    if (post.paper) html += ' | <a href="' + post.paper + '">paper</a>';
    return html;
}

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

    // Pre-create placeholders in order so posts always appear in POSTS order
    var slots = POSTS.map(function(post) {
        var article = document.createElement('div');
        article.className = 'post';
        article.innerHTML =
            '<h2 class="post-title"><a href="blog/' + post.file + '.html">' + post.title + '</a></h2>' +
            '<div class="post-meta">' + postMetaHTML(post) + '</div>';
        container.appendChild(article);
        return article;
    });

    POSTS.forEach(function(post, i) {
        var url = 'blog/' + post.file + '.html';

        fetch(url)
            .then(function(r) { return r.text(); })
            .then(function(html) {
                var doc = new DOMParser().parseFromString(html, 'text/html');
                var content = doc.querySelector('.post-content');
                if (!content) return;

                var contentDiv = document.createElement('div');
                contentDiv.className = 'post-content';
                contentDiv.innerHTML = content.innerHTML;
                slots[i].appendChild(contentDiv);

                // Run any post-specific init (e.g., ARC visualizations)
                if (contentDiv.querySelector('.arc-example') && typeof initArcViz === 'function') {
                    initArcViz();
                }
            })
            .catch(function() {});
    });
})();

// Populate post title and date on blog pages from POSTS
(function setPostMeta() {
    var path = window.location.pathname;
    for (var i = 0; i < POSTS.length; i++) {
        if (path.indexOf(POSTS[i].file) !== -1) {
            var title = document.querySelector('.post-title');
            if (title && !title.textContent.trim()) title.textContent = POSTS[i].title;
            var meta = document.querySelector('.post-meta');
            if (meta && !meta.textContent.trim()) meta.innerHTML = postMetaHTML(POSTS[i]);
            document.title = POSTS[i].title + ' \u2013 Sathvik Redrouthu';
            break;
        }
    }
})();

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();
