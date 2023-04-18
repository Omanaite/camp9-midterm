import { useState } from 'react';
import Genreonclick from './Genreonclick';
import { Link } from 'react-router-dom';

export const EmojiLibary = [
  {
    Genre: 'Comedy',
    Emoji: '🤣',
    id: 4,
  },

  {
    Genre: 'Drama',
    Emoji: '🎭',
    id: 7,
  },

  {
    Genre: 'Horror',
    Emoji: '🔪',
    id: 11,
  },

  {
    Genre: 'Romance',
    Emoji: '😍',
    id: 14,
  },
];

function GenreFavorites() {
  return (
    <div className="bg-[#1C1C27]">
      <div className="flex justify-between px-5">
        <h2 className="text-white/40 text-[19px] ">Genre</h2>
        <Link to={'/genres'} className="text-[#FFB43A] stroke-[#FFB43A] flex">
          See All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full px-5 py-4 flex gap-[37px] justify-center bg-[#1C1C27]">
        {EmojiLibary.map(emojie => (
          <Genreonclick
            emojie={emojie.Emoji}
            genre={emojie.Genre}
            id={emojie.id}
          />
        ))}
      </div>
    </div>
  );
}
export default GenreFavorites;
