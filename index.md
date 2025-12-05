---
layout: default
title: Home
---

<section class="container">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>

  <main>
    {% for post in site.posts %}
    <article class="post">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
      {{ post.excerpt }}
    </article>
    {% endfor %}

    {% if paginator.total_pages > 1 %}
      <nav class="pagination">
        {% if paginator.previous_page %}<a href="{{ paginator.previous_page_path }}">Previous</a>{% endif %}
        {% if paginator.next_page %}<a href="{{ paginator.next_page_path }}">Next</a>{% endif %}
      </nav>
    {% endif %}
  </main>
</section>
