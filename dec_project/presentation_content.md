# Project Presentation: Harmony Music Player

---

## Slide 1: Title Slide

**Title:** Harmony Music Player
**Subtitle:** A Full-Stack Approach using Java, Data Structures, and Modern Web Tech
**Presented by:** [Your Name]
**Date:** December 17, 2025

*(Visual Concept: Clean background, Project Logo or a screenshot of the glassmorphism UI center stage)*

---

## Slide 2: Project Overview

**The Goal:**
To build a functional, aesthetically pleasing music player that bridges the gap between backend logic and frontend design.

**Core Concept:**
*   **Backend:** Robust Java logic using Data Structures.
*   **Frontend:** Modern, responsive Web Interface.
*   **Connection:** Seamless JSON data interchange.

---

## Slide 3: The Problem & Solution

**The Challenge:**
*   Console-based players are boring and hard to use.
*   Pure frontend players lack structured back-end data management.

**The Solution:**
*   **Harmony** combines the efficiency of Java's `LinkedList` for queue management with the visual appeal of HTML/CSS/JS.
*   Result: A simple yet powerful architecture.

---

## Slide 4: Architecture Diagram

*(Visual Concept: A simple diagram showing flow)*

`[Java Backend]` -> *Generates* -> `[JSON Data]` -> *Read By* -> `[Web Frontend]`

1.  **Java Layer:** Manages Songs & Playlist (LinkedList).
2.  **Data Layer:** `playlist.json` acts as the bridge.
3.  **Presentation Layer:** Browser renders UI and plays Audio.

---

## Slide 5: Backend Technology (Java)

**Key Features:**
*   **Core Logic:** Java 17+.
*   **Data Structure:** `LinkedList<Song>` used for the playlist. 
    *   *Why?* Efficient insertion/deletion and sequential access (Next/Prev).
*   **File I/O:** Custom `exportToJSON()` method.
    *   No heavyweight libraries used; pure logic.

---

## Slide 6: Frontend Technology (Web)

**Key Features:**
*   **HTML5:** Semantic structure including `<audio>` API.
*   **CSS3:** "Glassmorphism" Design.
    *   Blur effects (`backdrop-filter`).
    *   CSS Variables for easy theming.
    *   Animations (Rotating album art).
*   **JavaScript:**
    *   Asynchronous `fetch` for loading data.
    *   Event listeners for interactive controls.

---

## Slide 7: Code Spotlight - Java

*("Simple yet effective")*

```java
// Logic to export playlist to JSON
public void exportToJSON(String filename) {
    // ... setup FileWriter ...
    for (int i = 0; i < playlist.size(); i++) {
        writer.write(playlist.get(i).toJSON());
        // Handle commas for valid JSON
    }
}
```
*   demonstrates clean loop logic and string manipulation.

---

## Slide 8: Code Spotlight - JavaScript

*("Bringing it to life")*

```javascript
// Auto-playing the next track
audio.addEventListener('ended', () => {
    nextBtn.click(); // Triggers next song logic
});

// Dynamic Progress Bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = progress + '%';
});
```

---

## Slide 9: User Interface Demo

*(Visual Concept: Screenshot of the Player Application)*

*   **Dark Theme:** Easy on the eyes.
*   **Visual Feedback:** Active song highlighting, hover effects.
*   **Responsiveness:** Works on different screen sizes.

---

## Slide 10: Future Scope

*   **Shuffle & Repeat:** Enhanced playback algorithms.
*   **Search Functionality:** Sorting and filtering the LinkedList.
*   **Cloud Storage:** Hosting MP3s remotely instead of locally.
*   **Mobile App:** Wrapping the web view into a native Android container.

---

## Slide 11: Conclusion & Q&A

**Summary:**
We successfully built a full-stack application that is:
1.  **Simple** (Beginner friendly code).
2.  **Modern** (High-end UI).
3.  **Functional** (Real audio playback).

**Thank You!**
*Questions?*
