import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Result from '@/components/templates/Search/Result'
import React from 'react'

function Search() {
  return (
    <>
    <PageHeader route="Search" />
    <Result />
    </>
  )
}

export async function getServerSideProps(context){

  const {query} = context;
  
  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json();

  const searchResult = data.filter(item=> (item.type.includes(query.q) || item.title.includes(query.q)))

  console.log('search result', item)

  return{
    props:{

    },
  }
}

export default Search