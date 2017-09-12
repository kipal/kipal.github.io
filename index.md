---
layout: custom
---


# Education
{% for post in site.posts %}
    {% if post.category contains 'education' %}

<div class="section">
    <h2>{{ post.title }}</h2>

    <p class="interval">{{ post.interval }}</p>
    <p class="subject">{{ post.subject }}</p>

    <div class="details">
        {{ post.long_description }}
    </div>
</div>

    {% endif %}
{% endfor %}
# Work Experiences
{% for post in site.posts %}
    {% if post.category contains 'job' %}
<div class="section">
    <h2>{{ post.title }}</h2>

    <p class="interval">{{ post.interval }}</p>
    <p class="subject">{{ post.subject }}</p>
</div>
    {% endif %}
{% endfor %}
# Professional interest
# Personal interest

