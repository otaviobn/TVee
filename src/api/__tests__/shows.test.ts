import {groupEpisodesBySeason} from '../shows';
import {ShowEpisode} from '../types';

describe('Shows apis', () => {
  const episodesMock = [
    {
      id: 167,
      name: 'The Long Bright Dark',
      season: 1,
      number: 1,
    },
    {
      id: 182321,
      name: 'Down Will Come',
      season: 2,
      number: 4,
    },
  ];

  test('Should group the episodes by season', () => {
    const groups = groupEpisodesBySeason(episodesMock as ShowEpisode[]);
    const [episodeSeason1, episodeSeason2] = episodesMock;

    expect(groups).toEqual([
      {
        title: `Season ${episodeSeason1.season}`,
        data: [episodeSeason1],
      },
      {
        title: `Season ${episodeSeason2.season}`,
        data: [episodeSeason2],
      },
    ]);
  });
});
