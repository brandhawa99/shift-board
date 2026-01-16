# Shift Board Health
<img width="1024" height="768" alt="shift-board-pi-vercel-app-1024x768desktop-81f07d" src="https://github.com/user-attachments/assets/a7a6373b-7a48-4973-94cd-f2f286fdf609" />

## From Bug Fix to Marketplace Prototype

This project began with a specific observation of the Clipboard Health homepage: the "What Our Professionals Say About Us" carousel lacks 1-to-1 mapping between the user interaction and the expanded review.
In a marketplace built on trust and reliability, even small UI friction points can impact a professional's confidence. I built this repo to:

1. **Solve the interaction bug** using predictable state management.

2. **Expand the scope** into a shift-discovery dashboard to demonstrate React proficiency

Live Demo: https://shift-board-pi.vercel.app/

## Tech Stack

- **TypeScript & React:** to ensure type-safety across the shift-booking flow and prevent errors that can break a nurse's flow
- **TanStack Query:** used to manage "server state data"
- **TanStack Table:** used to handle the shifts view and allow for complex filtering/sorting that professionals need to find the right job for them
- **Shadcn UI & Tailwind CSS:** Used for high-velocity styling. I optimized this project for fast development with sacrificing accessibility

## DevOps, Portability and Testing

- **Testing:** implemented tests on critical interactions to ensure nurses see the correct shift data
- **Dockerization:** While the app is deployed on Vercel, the app is **Dockerized** to ensure its portability (I am in the eager to learn ECS, and Terraform group)
