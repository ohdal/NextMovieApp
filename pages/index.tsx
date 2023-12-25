import { useState, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Seo from "@/components/Seo";

type Repo = {
  results: Movies[] | null;
};

type Movies = {
  id: number;
  original_title: string;
  poster_path: string;
};

export default function Home({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = repo;
  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = (async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const repo: Repo = await res.json();

  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;
