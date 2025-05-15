import Image from "next/image"
import Link from "next/link"
import { VolumeIcon as VolumeUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { VocabularyWord } from "@/lib/vocabulary"

interface VocabularyListProps {
  words: VocabularyWord[]
}

export default function VocabularyList({ words }: VocabularyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {words.map((word) => (
        <Card key={word.id} className="overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={word.imageUrl || "/placeholder.svg?height=200&width=400"}
              alt={word.word}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{word.word}</h3>
              <Button variant="ghost" size="icon" title="Listen to pronunciation">
                <VolumeUp className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground mb-2">{word.transcription}</div>
            <Badge className="mb-2">{word.partOfSpeech}</Badge>
            <p className="text-sm mb-3">{word.definition}</p>
            <div className="text-sm italic text-muted-foreground mb-3">{word.example}</div>
            <Link href={`/word/${word.id}`}>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
