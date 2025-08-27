---
layout: page
title: "Experience Letters"
permalink: /experience/
subtitle: "Short essays about my past work in order."
---

<ul class="card-list">
  {% assign exps = site.experience | sort: 'date' | reverse %}
  {% for item in exps %}
    <li class="card">
      <a class="card-link" href="{{ item.url | relative_url }}">
        <h3 class="card-title">{{ item.title }}</h3>
        {% if item.role %}<p class="card-meta">{{ item.role }}{% if item.org %} · {{ item.org }}{% endif %}</p>{% endif %}
        <p class="card-excerpt">{{ item.excerpt | strip_html | truncate: 160 }}</p>
        <span class="card-date">{% if item.date %}{{ item.date | date: "%B %Y" }}{% endif %}</span>
      </a>
    </li>
  {% endfor %}
</ul>
