---
layout: custom
---

{% for post in site.posts %}
    {% if post.category contains 'education' %}
{% include section.html %}
    {% endif %}
{% endfor %}
