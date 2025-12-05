---
layout: default
title: Home
---

<section class="container">
  <div class="latest-posts">
    {% for post in site.posts %}
      <article class="post-preview">
        <a href="{{ post.url | relative_url }}" class="post-preview-link">
          {% if post.image %}
          <div class="post-thumbnail">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          </div>
          {% endif %}
          <div class="post-info">
            <h2>{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
</section>
