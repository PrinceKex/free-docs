'use client'
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from '@/components/ui/carousel'
import { templates } from '@/constants/templates'
import { cn } from '@/lib/utils'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { api } from '../../../convex/_generated/api'
import Image from 'next/image'
import { toast } from 'sonner'

export const TemplatesGallery = () => {
 const router = useRouter()
 const create = useMutation(api.documents.create)
 const [isCreating, setIsCreating] = useState(false)

 const onTemplateClick = (title: string, initialContent: string) => {
  setIsCreating(true)
  create({ title, initialContent })
   .catch(() => toast.error('Something went wrong'))
   .then((documentId) => {
    toast.success('Document created')
    router.push(`/documents/${documentId}`)
    //setIsCreating(false)
   })
   .finally(() => {
    setIsCreating(false)
   })
 }
 return (
  <div className='bg-[#f1f3f4]'>
   <div className='max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4'>
    <h3 className='text-base font-medium'>Start a new document</h3>
    <Carousel>
     <CarouselContent className='-ml-4'>
      {templates.map((template) => (
       <CarouselItem
        key={template.id}
        className='basis-1/2 sm:basis-1/3 md:basis1/4 lg:basis1/5 xl:basis1/6 2xl:basis-[14.285714%] pl-4'
       >
        <div
         className={cn(
          'aspect-[3/4] flex flex-col gap-y-2.5',
          isCreating && 'pointer-events-none opacity-50'
         )}
        >
         <button
          disabled={isCreating}
          // TODO: Add proper initial content
          onClick={() => onTemplateClick(template.label, '')}
          style={{
           backgroundImage: `url(${template.imageUrl})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
          }}
          className='size- hover:border-blue-500 rounded-sm border hover: bg-blue-50 transition flex flex-col items-center justify-center bg-white gap-y-4'
         />
         <p className='text-sm font-medium truncate'>{template.label}</p>
         <Image
          src={template.imageUrl}
          alt={template.label}
          width={120}
          height={120}
         />
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  </div>
 )
}
