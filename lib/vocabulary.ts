export interface VocabularyWord {
  id: string
  word: string
  transcription: string
  partOfSpeech: string
  definition: string
  example: string
  imageUrl?: string
  synonyms?: string[]
  antonyms?: string[]
  category?: string
}

// This is a placeholder function that would be replaced with actual data loading
// from the user's provided files
export async function getVocabularyWords(): Promise<VocabularyWord[]> {
  // In a real implementation, this would load from the user's data files
  // For now, we'll return sample data
  return sampleVocabularyWords
}

export async function getVocabularyWord(id: string): Promise<VocabularyWord | undefined> {
  const words = await getVocabularyWords()
  return words.find((word) => word.id === id)
}

export async function getRelatedWords(id: string): Promise<VocabularyWord[]> {
  const words = await getVocabularyWords()
  const currentWord = words.find((word) => word.id === id)

  if (!currentWord) return []

  // Find words in the same category or with similar part of speech
  return words
    .filter(
      (word) =>
        word.id !== id && (word.category === currentWord.category || word.partOfSpeech === currentWord.partOfSpeech),
    )
    .slice(0, 6)
}

// Sample data for demonstration
const sampleVocabularyWords: VocabularyWord[] = [
  {
    id: "1",
    word: "Ubiquitous",
    transcription: "/juːˈbɪkwɪtəs/",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere.",
    example: "Mobile phones are now ubiquitous in modern society.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Ubiquitous",
    synonyms: ["omnipresent", "universal", "widespread"],
    category: "academic",
  },
  {
    id: "2",
    word: "Ephemeral",
    transcription: "/ɪˈfɛm(ə)r(ə)l/",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time.",
    example: "The ephemeral nature of fashion trends makes it hard to keep up.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Ephemeral",
    synonyms: ["fleeting", "transitory", "momentary"],
    category: "academic",
  },
  {
    id: "3",
    word: "Serendipity",
    transcription: "/ˌsɛr(ə)nˈdɪpɪti/",
    partOfSpeech: "noun",
    definition: "The occurrence and development of events by chance in a happy or beneficial way.",
    example: "The discovery of penicillin was a serendipity.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Serendipity",
    synonyms: ["chance", "fortune", "luck"],
    category: "common",
  },
  {
    id: "4",
    word: "Pragmatic",
    transcription: "/præɡˈmætɪk/",
    partOfSpeech: "adjective",
    definition: "Dealing with things sensibly and realistically in a way that is based on practical considerations.",
    example: "We need a pragmatic approach to solving this problem.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Pragmatic",
    synonyms: ["practical", "realistic", "sensible"],
    category: "business",
  },
  {
    id: "5",
    word: "Eloquent",
    transcription: "/ˈɛləkwənt/",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing.",
    example: "She gave an eloquent speech that moved the audience.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Eloquent",
    synonyms: ["articulate", "fluent", "expressive"],
    category: "academic",
  },
  {
    id: "6",
    word: "Resilient",
    transcription: "/rɪˈzɪliənt/",
    partOfSpeech: "adjective",
    definition: "Able to withstand or recover quickly from difficult conditions.",
    example: "The resilient economy quickly bounced back after the recession.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Resilient",
    synonyms: ["tough", "adaptable", "hardy"],
    category: "business",
  },
  {
    id: "7",
    word: "Meticulous",
    transcription: "/məˈtɪkjʊləs/",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; very careful and precise.",
    example: "He is meticulous about keeping records of all transactions.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Meticulous",
    synonyms: ["thorough", "careful", "precise"],
    category: "common",
  },
  {
    id: "8",
    word: "Ambiguous",
    transcription: "/æmˈbɪɡjuəs/",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; not having one obvious meaning.",
    example: "The instructions were ambiguous and confusing.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Ambiguous",
    synonyms: ["unclear", "vague", "equivocal"],
    category: "academic",
  },
  {
    id: "9",
    word: "Itinerary",
    transcription: "/aɪˈtɪnərəri/",
    partOfSpeech: "noun",
    definition: "A planned route or journey.",
    example: "Our travel agent prepared a detailed itinerary for our vacation.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Itinerary",
    synonyms: ["schedule", "plan", "agenda"],
    category: "travel",
  },
  {
    id: "10",
    word: "Quintessential",
    transcription: "/ˌkwɪntɪˈsɛnʃ(ə)l/",
    partOfSpeech: "adjective",
    definition: "Representing the most perfect or typical example of a quality or class.",
    example: "The quintessential English gentleman wears a bowler hat.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Quintessential",
    synonyms: ["typical", "classic", "archetypal"],
    category: "academic",
  },
  {
    id: "11",
    word: "Procrastinate",
    transcription: "/prəˈkræstɪneɪt/",
    partOfSpeech: "verb",
    definition: "Delay or postpone action; put off doing something.",
    example: "I always procrastinate when it comes to doing my taxes.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Procrastinate",
    synonyms: ["delay", "postpone", "defer"],
    category: "common",
  },
  {
    id: "12",
    word: "Entrepreneur",
    transcription: "/ˌɒntrəprəˈnɜː/",
    partOfSpeech: "noun",
    definition: "A person who sets up a business or businesses, taking on financial risks in the hope of profit.",
    example: "As a successful entrepreneur, she has started three companies.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=Entrepreneur",
    synonyms: ["businessperson", "tycoon", "magnate"],
    category: "business",
  },
]
