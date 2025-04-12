# 3D Portfolio - MacBook Scene with Stars

This project showcases a floating laptop that displays my galaxy generator website, with a starry background. 

## Demo

> [Live Demo](https://giahenville.github.io/your-deployed-portfolio-url) (Replace with your live link)

## Built With

- **React Three Fiber** – Declarative rendering for Three.js
- **@react-three/drei** – Useful helpers like `Html`, `Text`, `Float`, and `PresentationControls`
- **Three.js** – JavaScript 3D library
- **GLTFLoader** – For loading the MacBook 3D model
- **Custom Particles Component** – For the starry background

## Features

- A 3D **MacBook** model with an embedded iframe that shows my website.
- A **floating animation** and **drag interaction** for an immersive experience.
- An added **starry sky** effect made with a custom particles component.
- Stylized 3D **text** that displays my name within the scene.
- Responsive lighting and a cinematic city-themed environment backdrop.

## Code Overview

### `Experience.jsx`

- Loads the MacBook model using `useGLTF`
- Adds lighting, environment presets, and float/drag animations using `PresentationControls` and `Float`
- Projects a real webpage onto the MacBook screen using `<Html>` + `<iframe>`
- Displays 3D text and the starry particles component

### `Particles.jsx`

A lightweight particle system:
- Uses 5,000 points randomly positioned in 3D space.
- Each point is a small white dot that mimics stars.
- Renders efficiently using `Points` and `PointMaterial`.

## Image

![Portfolio MacBook Screenshot](https://your-screenshot-link.com)  
*(Replace with your screenshot)*

## What I learned

- Using `useGLTF` to load and manipulate 3D models.
- Wrapping HTML in 3D space with `Html`.
- Creating a custom particle field to simulate a galaxy/starscape.
- Fine-tuning camera controls with `PresentationControls` for an interactive UX.

## Getting Started

Clone and run the project locally:

```bash
# Clone the repo
git clone https://github.com/your-username/3d-laptop.git
cd 3d-laptop

# Install dependencies
npm install

# Start development server
npm run dev
