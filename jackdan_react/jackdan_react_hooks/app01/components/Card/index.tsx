import Link from "next/link"

interface CardProps {
  url: string
  title: string
  description: string
  direction: boolean
}

const Card: React.FC<CardProps> = ({ url, title, description, direction }: CardProps) => {
  return <Link
    href={url}
    rel="nooper noreferrer"
    >
      <div className="m-4 max-w-xs rounded-xl border border-gray-200 p-6 text-left text-inherit transition-colors hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 active:border-blue-600 active:text-blue-600">
        { direction ? 
          <h2 className="mb-4 text-2xl">{title} &rarr;</h2> : 
          <h2 className="mb-4 text-2xl">&rarr; {title}</h2>
        }
        <p className="m-0 text-xl">{description}</p>
      </div>
  </Link>
}

export default Card;