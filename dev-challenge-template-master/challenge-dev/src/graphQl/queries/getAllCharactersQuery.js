import { useQuery, gql, useLazyQuery } from '@apollo/client'

const ALL_CHARACTERS = gql`

  query  findCharacterByName ($mypage: Int! , $characterName: String , $filterStatus: String , $filterGender: String , $filterSpecies: String ) {
    characters(page: $mypage , filter:{ 
        name : $characterName
        status : $filterStatus
        gender : $filterGender
        species : $filterSpecies 
    })
    {
    info {
        count
        pages
        prev
        next
    }
    results{
      id
      name
      status
      species
      gender
      image
    }
  }
}
`

export function useGetAllCharactersQuery () {
  const [getCharacters, { data, fetchMore, refetch }] = useLazyQuery(ALL_CHARACTERS)

  const getMoreCharacters = (nextPageNumber, gender, status, species, name) => {
    fetchMore({
      variables: {
        mypage: nextPageNumber,
        filterGender: gender,
        filterStatus: status,
        filterSpecies: species,
        characterName: name
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult

        return {
          ...prevResult,
          characters: {
            ...prevResult.characters,
            results: [...prevResult.characters.results, ...fetchMoreResult.characters.results]
          }
        }
      }
    })
  }
  
  return {
    characters: data?.characters.results,
    count: data?.characters.results?.length || 0,
    getCharacters,
    getMoreCharacters,
    refetch

  }
}
