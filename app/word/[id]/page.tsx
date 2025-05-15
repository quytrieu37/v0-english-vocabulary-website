import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, VolumeIcon as VolumeUp, Bookmark, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getVocabularyWord, getRelatedWords } from "@/lib/vocabulary"

interface WordPageProps {
  params: {
    id: string
  }
}

export default async function WordPage({ params }: WordPageProps) {
  const word = await getVocabularyWord(params.id)
  const relatedWords = await getRelatedWords(params.id)

  if (!word) {
    return <div>Word not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to vocabulary list
          </Button>
        </Link>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square relative rounded-md overflow-hidden">
                <Image
                  src={word.imageUrl || "/placeholder.svg?height=400&width=400"}
                  alt={word.word}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-4xl font-bold">{word.word}</h1>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" title="Listen to pronunciation">
                      <VolumeUp className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Save word">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Share">
                      <Share className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="text-xl text-muted-foreground mb-4">{word.transcription}</div>

                <Badge className="mb-4">{word.partOfSpeech}</Badge>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">Definition</h2>
                  <p className="text-lg">{word.definition}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">Example</h2>
                  <p className="text-lg italic">{word.example}</p>
                </div>

                {word.synonyms && word.synonyms.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Synonyms</h2>
                    <div className="flex flex-wrap gap-2">
                      {word.synonyms.map((synonym) => (
                        <Badge key={synonym} variant="outline">
                          {synonym}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {word.antonyms && word.antonyms.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Antonyms</h2>
                    <div className="flex flex-wrap gap-2">
                      {word.antonyms.map((antonym) => (
                        <Badge key={antonym} variant="outline">
                          {antonym}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {relatedWords.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Words</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedWords.map((relatedWord) => (
                <Link href={`/word/${relatedWord.id}`} key={relatedWord.id}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{relatedWord.word}</h3>
                        <Badge variant="outline">{relatedWord.partOfSpeech}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{relatedWord.definition}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
