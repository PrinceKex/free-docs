'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DocumentInput } from './document-input'
import {
 Menubar,
 MenubarContent,
 MenubarItem,
 MenubarMenu,
 MenubarSeparator,
 MenubarShortcut,
 MenubarSub,
 MenubarSubContent,
 MenubarSubTrigger,
 MenubarTrigger,
} from '@/components/ui/menubar'
import {
 BoldIcon,
 FileIcon,
 FileJsonIcon,
 FilePenIcon,
 FilePlusIcon,
 FileTextIcon,
 GlobeIcon,
 ItalicIcon,
 PrinterIcon,
 Redo2Icon,
 RemoveFormattingIcon,
 StrikethroughIcon,
 TextIcon,
 TrashIcon,
 UnderlineIcon,
 Undo2Icon,
} from 'lucide-react'
import { BsFilePdf } from 'react-icons/bs'

export const Navbar = () => {
 return (
  <nav className='flex items-center justify-between'>
   <div className='flex gap-2 items-center'>
    <Link href='/'>
     <Image src='/logo.svg' alt='Logo' width={36} height={36} />
    </Link>
    <div className='flex flex-col'>
     {/*  Document Input*/}
     <DocumentInput />
     {/*  Menu Bar*/}
     <div className='flex'>
      <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
       <MenubarMenu>
        <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
         File
        </MenubarTrigger>
        <MenubarContent className='print:hidden'>
         <MenubarSub>
          <MenubarSubTrigger>
           <FileIcon className='size-4 mr-2' />
           Save
          </MenubarSubTrigger>
          <MenubarSubContent>
           <MenubarItem>
            <FileJsonIcon className='size-4 mr-2' /> JSON
           </MenubarItem>
           <MenubarItem>
            <GlobeIcon className='size-4 mr-2' /> HTML
           </MenubarItem>
           <MenubarItem>
            <BsFilePdf className='size-4 mr-2' /> PDF
           </MenubarItem>
           <MenubarItem>
            <FileTextIcon className='size-4 mr-2' /> Text
           </MenubarItem>
          </MenubarSubContent>
         </MenubarSub>
         <MenubarItem className='size-4 mr-2'>
          <FilePlusIcon />
          New Document
         </MenubarItem>
         <MenubarSeparator />
         <MenubarItem>
          <FilePenIcon className='size-4 mr-2' />
          Rename
         </MenubarItem>
         <MenubarItem>
          <TrashIcon className='size-4 mr-2' />
          Remove
         </MenubarItem>
         <MenubarSeparator />
         <MenubarItem onClick={() => window.print()}>
          <PrinterIcon className='size-4 mr-2' />
          Print <MenubarShortcut>xP</MenubarShortcut>
         </MenubarItem>
        </MenubarContent>
       </MenubarMenu>
       <MenubarMenu>
        <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
         Edit
        </MenubarTrigger>
        <MenubarContent>
         <MenubarItem>
          <Undo2Icon className='size-4 mr-2' />
          Undo <MenubarShortcut>xZ</MenubarShortcut>
         </MenubarItem>
         <MenubarItem>
          <Redo2Icon className='size-4 mr-2' />
          Redo <MenubarShortcut>xY</MenubarShortcut>
         </MenubarItem>
        </MenubarContent>
       </MenubarMenu>
       <MenubarMenu>
        <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
         Insert
        </MenubarTrigger>
        <MenubarContent>
         <MenubarSub>
          <MenubarSubTrigger>Table</MenubarSubTrigger>
          <MenubarSubContent>
           <MenubarItem>1 x 1</MenubarItem>
           <MenubarItem>2 x 2</MenubarItem>
           <MenubarItem>3 x 3</MenubarItem>
           <MenubarItem>4 x 4</MenubarItem>
          </MenubarSubContent>
         </MenubarSub>
        </MenubarContent>
       </MenubarMenu>
       <MenubarMenu>
        <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
         Format
        </MenubarTrigger>
        <MenubarContent>
         <MenubarSub>
          <MenubarSubTrigger>
           <TextIcon className='size-4 mr-2' />
           Text
          </MenubarSubTrigger>
          <MenubarSubContent>
           <MenubarItem>
            <BoldIcon className='size-4 mr-2' />
            Bold
            <MenubarShortcut>xB</MenubarShortcut>
           </MenubarItem>
           <MenubarItem>
            <ItalicIcon className='size-4 mr-2' />
            Italic
            <MenubarShortcut>xI</MenubarShortcut>
           </MenubarItem>
           <MenubarItem>
            <UnderlineIcon className='size-4 mr-2' />
            Underline
            <MenubarShortcut>xU</MenubarShortcut>
           </MenubarItem>
           <MenubarItem>
            <StrikethroughIcon className='size-4 mr-2' />
            <span className=''>Strikethrough&nbsp;</span>
            <MenubarShortcut>x5</MenubarShortcut>
           </MenubarItem>
          </MenubarSubContent>
         </MenubarSub>
         <MenubarItem>
          <RemoveFormattingIcon className='size-4 mr-2' />
          Clear Formatting
         </MenubarItem>
        </MenubarContent>
       </MenubarMenu>
      </Menubar>
     </div>
    </div>
   </div>
  </nav>
 )
}
