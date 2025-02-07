# Stone Paper Scissors Game

This is a simple **Stone Paper Scissors** game built using **Next.js (React)** and styled with **Tailwind CSS**. The game allows players to compete against the computer, which makes its choices using `Math.random()`. It also includes sound effects and device vibrations for a more immersive experience.

## Features
- **User vs. Computer Gameplay**: The computer makes random selections using `Math.random()`.
- **Score Tracking**: Keeps track of the user's and computer's scores.
- **Game Result Announcement**: Displays a message when a player reaches 5 points.
- **New Game & Reset Options**: Allows players to restart the game at any time.
- **Sound Effects**: Adds sounds for button clicks and game results.
- **Vibrations**: Uses device vibration for feedback on supported devices.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/stone-paper-scissors.git
   cd stone-paper-scissors
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and visit `http://localhost:3000` to play the game.

## How to Play
1. Click on **Stone**, **Paper**, or **Scissors** to make your choice.
2. The computer will randomly select a move.
3. The game will display the result and update the score accordingly.
4. The first to reach **5 points** wins the game.
5. Click **New Game** to restart after a win/loss or **Reset Game** to reset scores.

## Technologies Used
- **Next.js** (React Framework)
- **Tailwind CSS** (Styling)
- **JavaScript** (Game logic & `Math.random()` for randomness)
- **HTML5 Audio API** (Sound effects)
- **Vibration API** (Device vibrations)

## Future Improvements
- Add animations for a smoother UI experience.
- Enhance AI with a learning algorithm for a more challenging opponent.
- Implement multiplayer mode for online play.

---

_Made with ❤️ by Sabhya_

