// 父页面-index.tsx
import React, { useEffect } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import store from '../store/index';

import styles from '../styles/Home.module.css';
import { invoke } from '@tauri-apps/api/tauri';
import Card from '../components/Card';
import Button from '../components/Button';

const Home: NextPage = () => {
  const handleGoToChild = async () => {
    const res = await Router.push('child');
    if (res) {
      store.addCount();
    }
  }

  const { countNum } = store;

  useEffect(() => {
    invoke('greet', { name: 'World' })
    .then(console.log)
    .catch(console.error)
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>Parent</title>
        <meta name="description" content="Generated Parent Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col item-center justify-center py-8">
        <h1 className="m-0 text-center text-6xl">
          欢迎来到首页
        </h1>

        <p className="my-12 text-center text-2xl leading-9">
          子页面访问次数: 
          <code className="rounded-md bg-gray-200 p-2 font-mono text-xl">{countNum}</code>
        </p>
        <div className="flex max-w-3xl flex-wrap items-center jusify-center">
          <Button 
            onClick={handleGoToChild}
            title="子页面"
            description="欢迎访问子页面"
            direction={true} />
        </div>
      </main>

      <footer className="flex flex-1 flex-grow-0 items-center justify-center border-t border-gray-200 py-4">
        <div>
          <a
            onClick={handleGoToChild}
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center p-4"
          >
            Powered by{" "}
            <span className="ml-2 h-6">
              <Image
                src="/logo.png"
                alt="Logo"
                height={24}
                width={78}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home;