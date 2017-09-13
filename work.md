---
layout: custom
---

{% for post in site.posts %}
    {% if post.category contains 'job' %}
{% include section.html %}
    {% endif %}
{% endfor %}
