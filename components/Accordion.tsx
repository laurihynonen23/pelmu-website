'use client'
import { useState } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <li className="accordion-item">
      <button
        onClick={() => setOpen(!open)}
        className="block w-full text-left py-7 px-10 pr-6 text-18 md:text-24 leading-snug font-medium text-ink"
        aria-expanded={open}
      >
        <div className="flex justify-between items-center gap-4">
          <span className="w-4/5">{question}</span>
          <span className="flex-shrink-0 h-12 w-12 rounded-full border border-ink/30 flex items-center justify-center relative">
            <span className="block w-4 h-px bg-ink" />
            <span className={`block w-px h-4 bg-ink absolute transition-all duration-300 ${open ? 'opacity-0 rotate-90' : ''}`} />
          </span>
        </div>
      </button>
      {open && (
        <div className="px-10 pb-7 text-18 leading-relaxed text-ink/80 animate-fade-in">
          {answer}
        </div>
      )}
    </li>
  )
}

interface AccordionGroupProps {
  id: string
  title: string
  items: AccordionItemProps[]
}

export function AccordionGroup({ id, title, items }: AccordionGroupProps) {
  return (
    <div className="mb-16" id={id}>
      <h2 className="font-serif text-32 md:text-40 mb-8 text-ink">{title}</h2>
      <ul className="grid gap-3 w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </div>
  )
}
