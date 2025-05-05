// components/CosmicCodersGame.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Howl } from 'howler';
import { motion } from 'framer-motion';

export default function CosmicCodersGame() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  // Sound effects
  const sounds = {
    explosion: new Howl({ src: ['/sounds/explosion.mp3'] }),
    collect: new Howl({ src: ['/sounds/collect.mp3'] }),
    thrust: new Howl({ src: ['/sounds/thrust.mp3'], loop: true }),
  };

  // Initialize game engine
  useEffect(() => {
    if (!gameStarted || !gameContainerRef.current) return;

    const { Engine, Render, Bodies, World, Composite, Events } = Matter;
    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const render = Render.create({
      element: gameContainerRef.current,
      engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#0f172a',
      },
    });

    // Game objects
    const ship = Bodies.rectangle(400, 500, 40, 60, {
      frictionAir: 0.05,
      render: { fillStyle: '#3b82f6' },
    });

    const asteroids = Array(10).fill(null).map(() => 
      Bodies.circle(
        Math.random() * 700 + 50,
        Math.random() * -500,
        Math.random() * 30 + 20,
        { restitution: 0.8 }
      )
    );

    const powerUps = Array(5).fill(null).map(() =>
      Bodies.rectangle(
        Math.random() * 700 + 50,
        Math.random() * -300,
        20,
        20,
        { isSensor: true, render: { fillStyle: '#10b981' } }
      )
    );

    World.add(engine.world, [ship, ...asteroids, ...powerUps]);
    Engine.run(engine);
    Render.run(render);

    // Collision detection
    Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        if (pair.bodyA === ship || pair.bodyB === ship) {
          const otherBody = pair.bodyA === ship ? pair.bodyB : pair.bodyA;
          
          if (powerUps.includes(otherBody)) {
            sounds.collect.play();
            setScore((s) => s + 100);
            World.remove(engine.world, otherBody);
          } else {
            sounds.explosion.play();
            setGameOver(true);
          }
        }
      });
    });

    // Keyboard controls
    const keys: Record<string, boolean> = {};
    window.addEventListener('keydown', (e) => {
      keys[e.key] = true;
      if (e.key === 'ArrowUp') sounds.thrust.play();
    });
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
      if (e.key === 'ArrowUp') sounds.thrust.stop();
    });

    const moveShip = () => {
      if (keys['ArrowLeft']) ship.force.x = -0.01;
      if (keys['ArrowRight']) ship.force.x = 0.01;
      if (keys['ArrowUp']) ship.force.y = -0.02;
      if (keys['ArrowDown']) ship.force.y = 0.01;
    };

    const gameLoop = setInterval(() => {
      moveShip();
      if (gameOver) {
        clearInterval(gameLoop);
        Matter.Engine.clear(engine);
        Render.stop(render);
      }
    }, 16);

    return () => {
      clearInterval(gameLoop);
      Matter.Engine.clear(engine);
      Render.stop(render);
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        🚀 Cosmic Coders
      </h1>

      {!gameStarted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="mb-6 text-lg">Navigate through asteroids and collect power-ups!</p>
          <button
            onClick={() => setGameStarted(true)}
            className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Start Game
          </button>
        </motion.div>
      ) : gameOver ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-6">Your Score: <span className="text-yellow-400">{score}</span></p>
          <button
            onClick={() => {
              setGameOver(false);
              setGameStarted(false);
              setScore(0);
            }}
            className="px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Play Again
          </button>
        </motion.div>
      ) : (
        <>
          <div className="mb-4 text-xl">
            Score: <span className="text-yellow-400">{score}</span>
          </div>
          <div
            ref={gameContainerRef}
            className="border-2 border-blue-500 rounded-lg overflow-hidden"
          />
          <div className="mt-4 text-sm text-gray-400">
            Controls: Arrow Keys (← → ↑ ↓)
          </div>
        </>
      )}
    </div>
  );
}