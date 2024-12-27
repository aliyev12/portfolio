---
title: "Sprint Planner"
thumbnail:
  url: sprint_planner_thumbnail.png
  alt: Sprint Planner Thumbnail
mainImage:
  url: sprint_planner_main.png
  alt: Sprint Planner
additionalImages:
  - url: sprint_planner_create_page.png
    alt: Sprint Planner Create Page
  - url: sprint_planner_edit_cards_page.png
    alt: Sprint Planner Edit Cards Page
  - url: sprint_planner_edit_categories_page.png
    alt: Sprint Planner Edit Categories Page
  - url: sprint_planner_join_page.png
    alt: Sprint Planner Join Page
  - url: sprint_planner_landing_page.png
    alt: Sprint Planner Landing Page
  - url: sprint_planner_stats.png
    alt: Sprint Planner Stats
  - url: sprint_planner_voting.png
    alt: Sprint Planner Voting
tags: ["React", "Node"]
projectURL: "https://sprint-planner-dun.vercel.app"
githubRepoLinks: ["https://github.com/aliyev12/sprint-planner"]
excerpt: "App for planning sprints following Agile methodology. Lets users vote for tickets, see stats, and more."
weight: 2
slug: sprint-planner
---

This app is designed for creative teams to vote and assign Agile story points for various efforts. App has various feature, such tha allow customization of efforts to vote for, creating rooms and sharing a URL for other team members to join.

It all start with either creating a new room or by joning an existing room.

<figure>
<img src="/images/sprint_planner_landing_page.png" alt="Sprint Planner Landing Page">
<figcaption>Landing page of the Sprint Planner</figcaption>
</figure>

When user click on Create New Room, they are presented with a screen that asks for user's name and a name of the new room.

<figure>
<img src="/images/sprint_planner_create_page.png" alt="Sprint Planner Landing Page">
<figcaption>Create new room page</figcaption>
</figure>

Alternatively, a user can join an existing room by navigating to room's URL and providing their name.

<figure>
<img src="/images/sprint_planner_join_page.png" alt="Sprint Planner Join Room">
<figcaption>Joining an existing room</figcaption>
</figure>

Main user that creates a room, gets to modify cards.

<figure>
<img src="/images/sprint_planner_edit_cards_page.png" alt="Sprint Planner Edit Cards">
<figcaption>Editing default set of cards in order to customize them for the project</figcaption>
</figure>

Then the voting begins. Users get to click on a card of their choice. Users see other teammates who are online.

<figure>
<img src="/images/sprint_planner_voting.png" alt="Sprint Planner Voting Session">
<figcaption>Voting session</figcaption>
</figure>

Once the voting is complete, users get to see the stats - how many people voted for which card.

<figure>
<img src="/images/sprint_planner_stats.png" alt="Sprint Planner Stats">
<figcaption>Stats following the voting session</figcaption>
</figure>

In terms of a tech stack, the app is a full-stack web app built with React on the frontend and Node on the backend. It uses Sockets.IO for real-time communication.
