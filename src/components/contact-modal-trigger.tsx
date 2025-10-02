'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ContactModalContent } from '@/components/contact-modal';

interface ContactModalTriggerProps extends ButtonProps {
  children: React.ReactNode;
  subject?: string;
  need?: string;
  asChild?: boolean;
}

function InnerContactModalTrigger({ children, subject: subjectProp, need: needProp, asChild, ...props }: ContactModalTriggerProps) {
  const searchParams = useSearchParams();
  const subject = subjectProp ?? searchParams.get('subject');
  const need = needProp ?? searchParams.get('need');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button asChild={asChild} {...props}>
          {children}
        </Button>
      </DialogTrigger>
      <ContactModalContent subject={subject} need={need} />
    </Dialog>
  );
}

export function ContactModalTrigger(props: ContactModalTriggerProps) {
  return (
    <Suspense fallback={<Button {...props} disabled>{props.children}</Button>}>
        <InnerContactModalTrigger {...props} />
    </Suspense>
  )
}
