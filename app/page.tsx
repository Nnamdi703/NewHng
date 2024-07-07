// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className='flex justify-end text-lg h-52 w-52 rounded-full bg-emerald-300'>
//       <h1 className="yo mt-5 text-papayawhip-light px-8">Hello To A Future Billionaire</h1>
//       <p>In otherwords Hello Nnamdi</p>
//       <Link href='/about'>click to go to about</Link>
//     </main>
//   );
// }

"use client";


import { useState } from 'react';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('ERROR IN CODE'); // Reset error message
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl: url }), // Ensure this key matches what your backend expects
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 bg-blue-600">
      <h1 className="text-2xl mb-5">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-red-500">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL"
          required
          className="p-2 mb-2 w-72"
        />
        <button type="submit" className="p-2">Shorten</button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {shortUrl && (
        <p className="mt-5">
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default Home;




// import { useState } from 'react';

// const Home = () => {
//   const [url, setUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch('/api/shorten', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ originalUrl: url }),
//     });
//     const data = await response.json();
//     setShortUrl(data.shortUrl);
//   };

//   return (
//     <div className="flex flex-col items-center p-5 bg-blue-600">
//       <h1 className="text-2xl mb-5">URL Shortener</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col items-center text-red-500">
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter a URL"
//           required
//           className="p-2 mb-2 w-72"
//         />
//         <button type="submit" className="p-2">Shorten</button>
//       </form>
//       {shortUrl && (
//         <p className="mt-5">
//           Shortened URL: <a href={`http://${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
//         </p>
//       )}
//     </div>
//   );
// };

// export default Home;




// import { useState } from 'react';
// import styles from '../public/Home.module.css'
// const Home = () => {
//   const [url, setUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch('/api/shorten', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ originalUrl: url }),
//     });
//     const data = await response.json();
//     setShortUrl(data.shortUrl);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>URL Shortener</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter a URL"
//           required
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Shorten</button>
//       </form>
//       {shortUrl && (
//         <p className={styles.result}>
//           Shortened URL: <a href={`http://${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
//         </p>
//       )}
//     </div>
//   );
// };

// export default Home;



