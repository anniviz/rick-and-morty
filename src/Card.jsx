import './Card.css'

export default function Card({ name }) {
  return (
    <section className="Card__container">
      <h2>{name}</h2>
    </section>
  )
}
