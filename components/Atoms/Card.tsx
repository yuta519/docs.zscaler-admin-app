import Link from 'next/link';

interface Props {
  readonly img: string,
  readonly cardName: string,
  readonly cardDescription: string,
  readonly tags: string[],
}

const Card: React.FC<Props> = ({ img, cardName, cardDescription, tags }: Props) => {
  return (
    // <Link href="/projects/yuta519.github.io">
    <Link href="/projects/">
      <div key={cardName} className="flex-1 m-2 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{cardName}</div>
          <p className="text-gray-700 text-base">{cardDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            )
          })}
        </div>
      </div>
    </Link >
  )
}

export default Card
