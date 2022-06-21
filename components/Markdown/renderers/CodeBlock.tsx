import { HighLighter } from '../../../components/widgets/CodeHighlighter'
import { useEffect } from 'react'
import { loadScript } from '../../../utils/load-script'

const Mermaid = (props) => {
  useEffect(() => {
    loadScript(
      'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/mermaid/8.9.0/mermaid.min.js',
    ).then(() => {
      if (window.mermaid) {
        window.mermaid.initialize({
          theme: 'default',
          startOnLoad: false,
        })
        window.mermaid.init(undefined, '.mermaid')
      }
    })
  }, [])
  return <div className="mermaid">{props.value}</div>
}


export const CodeBlock = (props: {
  language: string | undefined
  value: string
}) => {
  if (props.language === 'mermaid') {
    return <Mermaid {...props} />
  } else {
    return <HighLighter {...props} />
  }
}
