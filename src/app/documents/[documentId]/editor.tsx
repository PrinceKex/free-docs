'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import { useEditorStore } from '@/store/use-editor-store'
import Underline from '@tiptap/extension-underline'
import Text from '@tiptap/extension-text'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { FontSizeExtension } from '@/extensions/font-size'
import { LineHeightExtension } from '@/extensions/line-height'
import { Ruler } from './ruler'

export const Editor = () => {
 const { setEditor } = useEditorStore()
 const editor = useEditor({
  immediatelyRender: false,
  onCreate: ({ editor }) => {
   setEditor(editor)
  },
  onDestroy() {
   setEditor(null)
  },
  onUpdate({ editor }) {
   setEditor(editor)
  },
  onSelectionUpdate({ editor }) {
   setEditor(editor)
  },
  onTransaction({ editor }) {
   setEditor(editor)
  },
  onFocus({ editor }) {
   setEditor(editor)
  },
  onBlur({ editor }) {
   setEditor(editor)
  },
  onContentError({ editor }) {
   setEditor(editor)
  },
  editorProps: {
   attributes: {
    style: 'padding-left: 56px; padding-right: 56px; ',
    class:
     'focus:outline-none print: border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
   },
  },
  extensions: [
   StarterKit,
   FontSizeExtension,
   LineHeightExtension.configure({
    types: ['paragraph', 'heading'],
    defaultLineHeight: 'normal',
   }),
   Table,
   TableRow,
   TableHeader,
   TableCell,
   Image,
   ImageResize,
   TaskItem.configure({ nested: true }),
   TaskList,
   Underline,
   Text,
   TextStyle,
   FontFamily,
   Highlight.configure({
    multicolor: true,
   }),
   Color,
   Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: 'https',
   }),
   TextAlign.configure({
    types: ['heading', 'paragraph'],
   }),
  ],
  content: '<p>Hello World! 🌎️</p>',
 })

 return (
  <div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible'>
   <Ruler />
   <div className='min-w-max flex justify-center w-[816px] py-4 print: py-0 mx-auto print:h-full print:min-w-0'>
    <EditorContent editor={editor} />
   </div>
  </div>
 )
}
