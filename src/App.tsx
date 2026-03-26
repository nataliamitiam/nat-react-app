interface Props {
  title: string;
}

const Card: React.FC<Props> = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />

    </div>
  )
}