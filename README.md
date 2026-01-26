# Shift Board Health

![Image of Dashboard](https://github.com/user-attachments/assets/a7a6373b-7a48-4973-94cd-f2f286fdf609)

## Overview

Shift Board Health is a production-grade frontend prototype inspired by a real interaction issue observed on the Clipboard Health homepage.

While reviewing the site, I noticed that the “What Our Professionals Say About Us” carousel did not consistently expand the review a user clicked (since fixed). The issue itself was minor—but in a healthcare staffing marketplace, even small UI inconsistencies can erode trust.

Rather than treating this as a one-off bug, I used it as a starting point to explore how I would design, build, and scale a reliable shift-discovery experience for healthcare professionals.

**Live Demo**: <https://shift-board-pi.vercel.app/>

## What This Project Demonstrates

This repository exists to demonstrate how I approach frontend engineering in a real marketplace context:

Clear and predictable state management

Scalable, modular React architecture

Type-safe data flows for high-trust environments

Product decisions that reduce friction for end users

The result is a professional dashboard that simulates how clinicians browse, filter, and evaluate shifts.

## Product Scope

The application models a healthcare professional’s shift-discovery workflow:

Browse a list of available shifts

Filter and sort roles using meaningful criteria

View consistent, unambiguous shift details

Every interaction is designed to be explicit and predictable—optimizing for confidence over cleverness.

## Technical Stack

- **React + TypeScript**
  Strict typing is enforced throughout the application to prevent state mismatches and reduce rework as the system scales.

- **TanStack Query**
  Used to model asynchronous server state in a way that mirrors real production data flows.

- **TanStack Table**
  Powers the shift table and supports complex sorting and filtering logic required for real job discovery.

- **shadcn/ui + Tailwind CSS**
  Enables rapid iteration while maintaining accessibility, consistency, and clean design constraints.

- **Bun**
  Chosen for its performance and fast local development feedback loop.

## Reliability and Portability

- **Testing**
  Tests are implemented around critical interactions to ensure users always see the correct shift data.

- **Dockerized**
  Although deployed on Vercel, the application is fully Dockerized to ensure portability across environments.
  (Actively expanding experience with ECS and Terraform to support production-scale infrastructure.)

## Local Development

### Clone the repository

```bash
git clone https://github.com/brandhawa99/shift-board.git
```

Install dependencies

```bash
bun install

# start dev server
bun run dev
```

Run with Docker

```bash
docker compose up
```

## Why This Project Exists

This is not a UI clone.

It is a practical exploration of how small frontend decisions compound in a healthcare staffing marketplace—and how to build interfaces that professionals can trust when the stakes are real.
