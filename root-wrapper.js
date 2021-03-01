import React from 'react'

// MDX
import { MDXProvider } from '@mdx-js/react'
import Code from './src/utils/Code'

// apollo
import { ApolloProvider } from '@apollo/client';
import { client } from './src/utils/apollo/client';


// this styles the code block
export const wrapRootElement = ({ element }) => {
  const components = {
    h2: ({ children }) => (
      <h2 style={{ color: 'black' }}>{children}</h2>
    ),
  
    'p.inlineCode': props => (
      <code style={{ backgroundColor: 'lightgray' }} {...props} />
    ),
  
    pre: ({ children: { props } }) => {
  
      if (props.mdxType === 'code') {
        return (
          <Code
            codeString={props.children.trim()}
            language={
              props.className && props.className.replace('language-', '')
            }
            {...props}
          />
        )
      }
    }
  }
  
  const MDXElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
  )


  return (
    <>
      <MDXElement />
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </>
  )
} 
