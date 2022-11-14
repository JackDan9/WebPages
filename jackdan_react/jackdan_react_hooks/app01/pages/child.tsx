// 子页面-child.tsx
import React, { useEffect, memo } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';

import store from "../store/index";

import styles from '../styles/Child.module.css';
import Card from '../components/Card';

const Child: NextPage = () => {
  const { countNum } = store;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>Child</title>
        <meta name="description" content="Generated child page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col item-center justify-center py-8">
        <h1 className="m-0 text-center text-6xl">
          欢迎来到子页面
        </h1>

        <p className="my-12 text-center text-2xl leading-9">
          子页面访问次数: 
          <code className="rounded-md bg-gray-200 p-2 font-mono text-xl">{countNum}</code>
        </p>

        <div className="flex max-w-3xl flex-wrap items-center jusify-center">
          <Card 
            url='/' 
            title='回到首页' 
            description='跳转回首页'
            direction={false} />
        </div>
      </main>

      <footer className="flex flex-1 flex-grow-0 items-center justify-center border-t border-gray-200 py-4">
        <div>
          <a
            href='/'
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

// Child.getInitialProps = async (ctx) => {
//   console.log(ctx);
// }

export default Child;