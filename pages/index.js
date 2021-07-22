import PropTypes from 'prop-types';
import React from 'react';
import { getStaticPokemonByGen } from '../lib/utils/static-utils';
import { Layout } from "../components/Layout"
import classes from '../styles/Home.module.css';


export const getStaticProps = getStaticPokemonByGen(1);

export default function Home({ pokemon }) {
  // const { deck, clearDeck, downloadDeck, randomizeDeck, fetchDeck, toggleHandler, isSelected } = useDeck();
  return (
    <Layout title="Home">
    
      <h1>Cards</h1>
      <div>A Pokemon Minigame</div>
      </Layout>
  );
}

Home.propTypes = {
  pokemon: PropTypes.array
};
