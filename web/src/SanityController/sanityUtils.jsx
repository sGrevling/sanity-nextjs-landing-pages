import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

export const renderBlockContent = (body, className) =>
  <BlockContent
    className={className}
    blocks={body}
    serializers={serializers}
  />;
