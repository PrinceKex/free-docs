'use client'
import React, { useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from './ui/alert-dialog'
import { api } from '../../convex/_generated/api'
import { useMutation } from 'convex/react'

interface RemoveDialogProps {
 documentId: Id<'documents'>
 children: React.ReactNode
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
 const remove = useMutation(api.documents.removeById)
 const [isRemoving, setIsRemoving] = useState(false)
 return (
  <AlertDialog>
   <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
   <AlertDialogContent onClick={(e) => e.stopPropagation()}>
    <AlertDialogHeader>
     <AlertDialogTitle>Are you sure?</AlertDialogTitle>
     <AlertDialogDescription>
      This action cannot be undone it will permanently delete your document
     </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
      Cancel
     </AlertDialogCancel>
     <AlertDialogAction
      disabled={isRemoving}
      onClick={(e) => {
       e.stopPropagation()
       setIsRemoving(true)
       remove({ id: documentId }).finally(() => setIsRemoving(false))
      }}
     >
      Delete
     </AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 )
}
