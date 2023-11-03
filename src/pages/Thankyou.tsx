interface Props {
  totalPoints: number;
}

const Thankyou = ({ totalPoints }: Props) => {
  return (
    <>
      <h1>蓉雞得到的友情分數是</h1>
      <p>{totalPoints}分</p>
    </>
  );
};

export default Thankyou;
