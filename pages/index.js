import PropTypes from 'prop-types';
import React from 'react';
import { getStaticPokemonByGen } from '../lib/utils/static-utils';
import { Layout } from "../components/Layout"
import { Card } from "../components/Card"
import { PokemonCards } from "../components/PokemonCards"
import { useDeck } from "../lib/use-deck"
import classes from '../styles/Home.module.css';


export const getStaticProps = getStaticPokemonByGen(1);

export default function Home({ pokemon }) {
  const { deck, clearDeck, downloadDeck, randomizeDeck, fetchDeck, toggleHandler, isSelected } = useDeck();
  
  return (
    <Layout title="Home">
      <div></div>
      <div>
        <PokemonCards>
          {
            pokemon.map(p => {
              return <Card pokemon={p}></Card>
            })
          }
        </PokemonCards>
      </div>
      </Layout>
  );
}

Home.propTypes = {
  pokemon: PropTypes.array
};
