---
layout: custom
---


# Education
{% for post in site.posts %}
    {% if post.category contains 'education' %}
        {% if forloop.index == 1 %}
            {% assign post.is_active = true  %}
        {% endif %}
{% include section.html %}
    {% endif %}
{% endfor %}
# Work Experiences
{% for post in site.posts %}
    {% if post.category contains 'job' %}
{% include section.html %}
    {% endif %}
{% endfor %}
# Professional interest
# Personal interest

