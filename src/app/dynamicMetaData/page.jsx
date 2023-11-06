import React from 'react'

const DynamicMetaDataPage = () => {
  return (
    <div>dynamicMetaData</div>
  )
}

export default DynamicMetaDataPage

export function generateMetadata({params}){
    return {
        title:'dynamic meta title',
        description:'user page description'
    }
}