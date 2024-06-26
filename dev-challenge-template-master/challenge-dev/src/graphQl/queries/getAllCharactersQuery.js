import { gql, useLazyQuery } from '@apollo/client';

const ALL_CHARACTERS = gql`
  query findCharacterByName(
    $mypage: Int!
    $characterName: String
    $filterStatus: String
    $filterGender: String
    $filterSpecies: String
  ) {
    characters(
      page: $mypage
      filter: {
        name: $characterName
        status: $filterStatus
        gender: $filterGender
        species: $filterSpecies
      }
    ) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
        dimension
      }
      created
    }
  }
`;
export function getCharacter() {
  const [getCharacterById, { data }] = useLazyQuery(GET_CHARACTER);
  return {
    getCharacterById,
    data,
  };
}

export function useGetAllCharactersQuery() {
  const [getCharacters, { data, fetchMore, refetch }] =
    useLazyQuery(ALL_CHARACTERS);

  const getMoreCharacters = (nextPageNumber, gender, status, species, name) => {
    fetchMore({
      variables: {
        mypage: nextPageNumber,
        filterGender: gender,
        filterStatus: status,
        filterSpecies: species,
        characterName: name,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        return {
          ...prevResult,
          characters: {
            ...prevResult.characters,
            results: [
              ...prevResult.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        };
      },
    });
  };

  return {
    characters: data?.characters.results,
    count: data?.characters.results?.length || 0,
    hasNext: typeof data?.characters.info.next === 'number',
    getCharacters,
    getMoreCharacters,
    refetch,
    getCharacter,
  };
}
