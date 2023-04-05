import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hacker.png"
          alt="Some random hacker"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>{"Hi, I'm Erik"}</h1>
      <p>
        I like to think ponder about software design patterns, cloud
        architecture and making testing and deployment as frictionless as
        possible!
      </p>
    </section>
  );
}

export default Hero;
