import React from 'react';

type Props = {
  placeholder: 'your@email.com' | 'Enter your Password';
  svg: 'email' | 'key';
};

function InputForm({ placeholder, svg }: Props) {
  return (
    <label className='relative'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute top-3 left-5 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={
            svg === 'email'
              ? 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              : 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
          }
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg bg-gray-500 h-[48px] pl-16"
      />
    </label>
  );
}

export default InputForm;
