---
layout: custom
---


# Education
{% for post in site.posts %}
    {% if post.category contains 'education' %}

<div class="section">
    <h2>{{ post.title }}</h2>

    <p class="left">{{ post.interval }}</p>
    <p class="right">{{ post.excerpt }}</p>

    <div class="details">
        {{ post.content }}
    </div>
</div>

    {% endif %}
{% endfor %}
# Work Experiences
{% for post in site.posts %}
    {% if post.category contains 'job' %}
<div class="section">
    <h2>{{ post.title }}</h2>

    <p class="left">{{ post.interval }}</p>
    <p class="right">{{ post.excerpt }}</p>

    <div class="details">
        {{ post.long_description }}
    </div>
</div>
    {% endif %}
{% endfor %}
# Professional interest
# Personal interest

