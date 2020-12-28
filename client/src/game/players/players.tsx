import { observer } from 'mobx-react';

import styled from 'styled-components/macro';

import { playersStore } from '../../common/store/players-store';

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const PlayerCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  color: #fff;
  background-color: #161b1b;
`;

export const Players = observer(() => {
  return (
    <Wrapper>
      {playersStore.players.map((player) => (
        <PlayerCard>
          <div>{player.name}</div>
          <div>{15000}$</div>
        </PlayerCard>
      ))}
    </Wrapper>
  );
});