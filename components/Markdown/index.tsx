import clsx from "clsx";
import { ElementType, FC } from "react";
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import { ensuredForwardRef } from "react-use";
import { Heading, RenderLink, RenderTableHead, RenderTableRow, RenderTableBody } from "./renderers";
import { RenderSpoiler, RenderParagraph, RenderReference, RenderListItem } from "./renderers/renderers";
import styles from "./index.module.css";
import { CodeBlock } from "./renderers/CodeBlock";
import { Image } from './renderers/Image'

type MdProps = ReactMarkdownProps & {
  value?: string
  toc?: boolean
  [key: string]: any
  style?: React.CSSProperties
  readonly renderers?: { [nodeType: string]: ElementType }
  wrapperProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  codeBlockFully?: boolean

  children?: string
}

const __Markdown: FC<MdProps> = ensuredForwardRef<HTMLDivElement,MdProps>(

  (props, ref) => {
    const {
      value,
      renderers,
      style,
      wrapperProps = {},
      codeBlockFully = false,
      ...rest
    } = props

    // const [headings, setHeadings] = useState<HTMLElement[]>([])

    // useEffect(() => {
    //   const _ = ref as RefObject<HTMLElement>
    //   if (!_.current) {
    //     return
    //   }
    //   const $ = _.current

    //   setHeadings(
    //     Array.from(
    //       $.querySelectorAll(
    //         range(0, 6)
    //           .map((i) => `h${i}`)
    //           .join(', '),
    //       ),
    //     ),
    //   )
    // }, [ref, value])



    return (
      <div
        id="write"
        style={style}
        {...wrapperProps}
        ref={ref}
        className={clsx(
          styles['md'],
          codeBlockFully ? styles['code-fully'] : undefined,
        )}
      >
        <ReactMarkdown
          source={value ?? (props.children as string)}
          // source={TestText}
          {...rest}
          renderers={
            {
              code: CodeBlock,
              pre: CodeBlock,
              image: Image,
              heading: Heading(),
              link: RenderLink,
              spoiler: RenderSpoiler,
              paragraph: RenderParagraph,
              linkReference: RenderReference,
              listItem: RenderListItem,
              tableHead: RenderTableHead,
              tableRow: RenderTableRow,
              tableBody: RenderTableBody,
              ...renderers,
            }
          }
        />

        {/* {props.toc && <TOC headings={headings} />} */}
      </div>
    )
  }
  
)

export const Markdown = __Markdown
