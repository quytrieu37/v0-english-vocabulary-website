"use client"

import { useState } from "react"
import Image from "next/image"
import { VolumeIcon as VolumeUp, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { VocabularyWord } from "@/lib/vocabulary"

interface FlashcardProps {
  word: VocabularyWord
}

export default function FlashcardComponent({ word }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="perspective-1000 w-full">
      <div
        className={`relative transition-transform duration-500 transform-style-3d w-full ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className={`backface-hidden w-full ${flipped ? "hidden" : "block"}`}>
          <CardContent className="p-6">
            <div className="aspect-video relative mb-4">
              <Image
                src={word.imageUrl || "/placeholder.svg?height=300&width=600"}
                alt={word.word}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">{word.word}</h2>
              <Button variant="ghost" size="icon" title="Listen to pronunciation">
                <VolumeUp className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-lg text-muted-foreground mb-4">{word.transcription}</div>
            <Button onClick={() => setFlipped(true)} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Flip to see definition
            </Button>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className={`backface-hidden w-full absolute top-0 rotate-y-180 ${flipped ? "block" : "hidden"}`}>
          <CardContent className="p-6">
            <div className="mb-4">
              <Badge className="mb-2">{word.partOfSpeech}</Badge>
              <h3 className="text-xl font-bold mb-2">Definition:</h3>
              <p className="text-lg mb-4">{word.definition}</p>
              <h3 className="text-xl font-bold mb-2">Example:</h3>
              <p className="text-lg italic">{word.example}</p>
            </div>
            <Button onClick={() => setFlipped(false)} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Flip back
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
